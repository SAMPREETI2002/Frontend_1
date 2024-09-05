import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({username}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">Telstar</div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Pay Bill</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/GenerateInvoice">Generate Invoice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">Payment History</Link>
            </li>
          </ul>

          {username && <p>Welcome, {username}!</p>}
          {console.log(username)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
