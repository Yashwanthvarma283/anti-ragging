import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (d = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function LandingPage({ onUserSignIn, onAdminLogin }) {
    return (
        <div className="landing">
            <nav className="nav-glass">
                <div className="nav-logo">Safe<span>Campus</span></div>
                <div className="nav-links">
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="nav-actions">
                    <button className="btn-ghost" onClick={onUserSignIn}>User Sign In</button>
                    <button className="nav-cta" onClick={onAdminLogin}>Admin Login</button>
                </div>
            </nav>

            <div className="hero">
                <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                    <div className="hero-tag">
                        <span className="hero-tag-dot" />
                        Active across 240+ universities
                    </div>
                </motion.div>

                <motion.h1 className="hero-h1" initial="hidden" animate="visible" custom={0.1} variants={fadeUp}>
                    Every campus.<br /><em>Every student.</em><br />Protected.
                </motion.h1>

                <motion.p className="hero-sub" initial="hidden" animate="visible" custom={0.2} variants={fadeUp}>
                    SafeCampus is the anonymous anti-ragging infrastructure trusted by India's premier
                    institutions — built for transparency, designed for action.
                </motion.p>

                <motion.div className="hero-btns" initial="hidden" animate="visible" custom={0.3} variants={fadeUp}>
                    <button className="btn-primary" onClick={onUserSignIn}>User Sign In</button>
                    <button className="btn-ghost" onClick={onAdminLogin}>Admin Login</button>
                </motion.div>
            </div>

            <motion.div className="stats-bar" initial="hidden" animate="visible" custom={0.4} variants={fadeUp}>
                {[
                    { num: '14,200+', label: 'Complaints Resolved' },
                    { num: '240+', label: 'Partner Universities' },
                    { num: '99.4%', label: 'Anonymity Preserved' },
                ].map((s) => (
                    <div className="stat-item" key={s.label}>
                        <div className="stat-num">{s.num}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </motion.div>

            <motion.div className="features" id="features" initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
                <div className="section-label">Core System</div>
                <div className="features-grid">
                    <div className="feat-card">
                        <div className="feat-icon">...</div>
                        <div className="feat-title">Anonymous by Design</div>
                        <div className="feat-desc">End-to-end encrypted complaints with zero identity leakage. Backed by cryptographic anonymity guarantees.</div>
                    </div>
                    <div className="feat-card">
                        <div className="feat-icon">...</div>
                        <div className="feat-title">Smart Escalation Engine</div>
                        <div className="feat-desc">Complaints that go unresolved auto-escalate through university → committee → police with configurable timers.</div>
                    </div>
                    <div className="feat-card">
                        <div className="feat-icon">...</div>
                        <div className="feat-title">Realtime Admin Dashboard</div>
                        <div className="feat-desc">Full visibility for system administrators. Track every complaint, every escalation, every action in real time.</div>
                    </div>
                </div>
            </motion.div>

            <motion.div className="cta-dark" initial="hidden" animate="visible" custom={0.6} variants={fadeUp}>
                <h2>Ready to make your campus safer?</h2>
                <p>Integrate SafeCampus in under 48 hours. No legacy system overhaul required.</p>
                <div className="cta-row">
                    <button className="btn-primary" onClick={onUserSignIn}>User Sign In</button>
                    <button className="btn-ghost" onClick={onAdminLogin}>Admin Login</button>
                </div>
            </motion.div>

            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <footer className="footer" id="contact">
                    <div className="footer-left">© 2024 SafeCampus Technologies Pvt. Ltd. All rights reserved.</div>
                    <div className="footer-right">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <a href="#">Security</a>
                        <a href="#">Docs</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}
