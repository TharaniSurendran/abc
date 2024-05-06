import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component for routing

function Header() {

  const navigate = useNavigate();
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Salon Booking</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SalonAndServices">Salon And Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">Service Confirmation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/offer">Offers</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Customer</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex">
<button onClick={() => { navigate('/login', { replace: true }) }}>Book Services</button>
            
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
