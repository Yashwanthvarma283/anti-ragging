import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ADMIN_ROLES = [
    'System Admin',
    'University',
    'National Anti-Ragging Team',
];

export default function AdminLoginPage() {
    const navigate = useNavigate();
    const [role, setRole] = useState(ADMIN_ROLES[0]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/app/admin/dashboard');
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>Admin Login</h1>
                <p>Authenticate based on your administrative access scope.</p>

                <label>Admin Type</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    {ADMIN_ROLES.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>

                <label>Official Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="btn-primary auth-submit">Continue to Admin</button>
                <div className="auth-links">
                    <Link to="/">Back to home</Link>
                </div>
            </form>
        </div>
    );
}
