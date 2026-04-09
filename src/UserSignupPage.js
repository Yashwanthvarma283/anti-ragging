import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserSignupPage() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/user/login');
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>User Sign Up</h1>
                <p>Create your account to file complaints and track actions.</p>

                <label>Full Name</label>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} required />

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>University / College</label>
                <input value={college} onChange={(e) => setCollege(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="btn-primary auth-submit">Create Account</button>
                <div className="auth-links">
                    <Link to="/user/login">Already have an account?</Link>
                    <Link to="/">Back to home</Link>
                </div>
            </form>
        </div>
    );
}
