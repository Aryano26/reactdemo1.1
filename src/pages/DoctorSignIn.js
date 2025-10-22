import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DoctorSignIn.css';

const DoctorSignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Add authentication logic
      navigate('/DoctorDashboard'); // Changed to match component name
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Doctor Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p className="register-link">
          New Doctor? <Link to="/DoctorRegistration">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default DoctorSignIn;