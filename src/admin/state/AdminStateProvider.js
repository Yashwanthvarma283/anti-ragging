import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { ALERTS_INIT, COMPLAINTS_INIT, LOGS_INIT, USERS_INIT } from '../../store';

const AdminStateContext = createContext(null);

const INITIAL_STATE = {
  complaints: COMPLAINTS_INIT,
  users: USERS_INIT,
  alerts: ALERTS_INIT,
  logs: LOGS_INIT,
  config: {
    escalationHours: 48,
    autoEscalationEnabled: true,
    fraudDetectionEnabled: true,
    policeEscalationEnabled: true,
  },
};

function toEscalationMeta(status, prev) {
  if (status === 'pending') return { escalationLevel: 1, assignedTo: 'Unassigned' };
  if (status === 'investigating') return { escalationLevel: 2, assignedTo: 'University Review Team' };
  if (status === 'escalated') return { escalationLevel: 3, assignedTo: 'Anti-Ragging Committee' };
  if (status === 'police') return { escalationLevel: 4, assignedTo: 'Police Department' };
  if (status === 'resolved') return { escalationLevel: prev.escalationLevel, assignedTo: prev.assignedTo };
  return { escalationLevel: prev.escalationLevel, assignedTo: prev.assignedTo };
}

function adminReducer(state, action) {
  switch (action.type) {
    case 'SET_COMPLAINT_STATUS': {
      const { complaintId, status } = action.payload;
      const nextComplaints = state.complaints.map((complaint) => {
        if (complaint.id !== complaintId) return complaint;
        const escalationMeta = toEscalationMeta(status, complaint);
        return {
          ...complaint,
          status,
          ...escalationMeta,
        };
      });

      const nextLog = {
        time: new Date().toISOString().replace('T', ' ').slice(0, 19),
        level: 'info',
        msg: `Complaint ${complaintId} status updated to ${status}`,
        actor: 'admin-panel',
      };

      return {
        ...state,
        complaints: nextComplaints,
        logs: [nextLog, ...state.logs],
      };
    }

    case 'TOGGLE_USER_BLOCK': {
      const { userId } = action.payload;
      const nextUsers = state.users.map((user) => {
        if (user.id !== userId) return user;
        const nextStatus = user.status === 'suspended' ? 'active' : 'suspended';
        return { ...user, status: nextStatus };
      });

      const updated = nextUsers.find((user) => user.id === userId);
      const nextLog = {
        time: new Date().toISOString().replace('T', ' ').slice(0, 19),
        level: 'warn',
        msg: `User ${userId} account ${updated?.status === 'suspended' ? 'blocked' : 'unblocked'} by admin`,
        actor: 'admin-panel',
      };

      return {
        ...state,
        users: nextUsers,
        logs: [nextLog, ...state.logs],
      };
    }

    case 'UPDATE_CONFIG': {
      const { key, value } = action.payload;
      return {
        ...state,
        config: {
          ...state.config,
          [key]: value,
        },
      };
    }

    default:
      return state;
  }
}

export function AdminStateProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, INITIAL_STATE);

  const actions = useMemo(
    () => ({
      setComplaintStatus: (complaintId, status) => dispatch({ type: 'SET_COMPLAINT_STATUS', payload: { complaintId, status } }),
      toggleUserBlock: (userId) => dispatch({ type: 'TOGGLE_USER_BLOCK', payload: { userId } }),
      updateConfig: (key, value) => dispatch({ type: 'UPDATE_CONFIG', payload: { key, value } }),
    }),
    []
  );

  const value = useMemo(() => ({ ...state, ...actions }), [state, actions]);

  return <AdminStateContext.Provider value={value}>{children}</AdminStateContext.Provider>;
}

export function useAdminState() {
  const context = useContext(AdminStateContext);
  if (!context) {
    throw new Error('useAdminState must be used within AdminStateProvider');
  }

  return context;
}

