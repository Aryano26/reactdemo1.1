import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Doctor Dashboard</h1>
      <div className="dashboard-grid">
        <Link to="/doctor-schedule" className="dashboard-card">
          <h3>Manage Schedule</h3>
          <p>Set your availability and manage appointments</p>
        </Link>
        <Link to="/doctor-appointments" className="dashboard-card">
          <h3>Appointments</h3>
          <p>View and manage patient appointments</p>
        </Link>
        <Link to="/doctor-profile" className="dashboard-card">
          <h3>Profile</h3>
          <p>Update your professional information</p>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDashboard;