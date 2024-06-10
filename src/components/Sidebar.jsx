import React from 'react';
import './sidebar.css';

function Sidebar({ onMenuClick }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <span>Smart Storage</span>
      </div>
      <nav className="menu">
        <ul>
          <li onClick={() => onMenuClick('overview')} className="active">Dashboard</li>
          <li onClick={() => onMenuClick('storage')}>Storage</li>
          <li onClick={() => onMenuClick('reports')}>Reports</li>
          <li onClick={() => onMenuClick('settings')}>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
