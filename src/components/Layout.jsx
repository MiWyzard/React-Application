import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <aside className="sidebar">
          <div className="profile">
            <img src="src\assets\icon-profile-miwyzard.jpg" alt="Profile" />
          </div>
          <nav>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/experience">EXPERIENCE</Link></li>
              <li><Link to="/education">EDUCATION</Link></li>
              <li><Link to="/skills">SKILLS</Link></li>
              <li><Link to="/interest">INTEREST</Link></li>
              <li><Link to="/awards">AWARDS</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="content">
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Layout;