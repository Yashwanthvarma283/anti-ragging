import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserLoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/');
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <h1>User Sign In</h1>
                <p>Sign in to submit or track complaints securely.</p>

                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="btn-primary auth-submit">Sign In</button>
                <div className="auth-links">
                    <Link to="/user/signup">Create account</Link>
                    <Link to="/">Back to home</Link>
                </div>
            </form>
        </div>
    );
}
