import React, { useContext } from 'react'
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';

const Navbar = () => {
  const navigate = useNavigate();
  const usertype = localStorage.getItem('userType');
  const {logout} = useContext(GeneralContext);

  return (
    <nav className="navbar">
      <h3>Growth Equity</h3>
      <div className="nav-options">
        {!usertype ? (
          <>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#home">Join now</a>
          </>
        ) : usertype === 'customer' ? (
          <>
            <p onClick={() => navigate('/home')}>Home</p>
            <p onClick={() => navigate('/portfolio')}>Portfolio</p>
            <p onClick={() => navigate('/history')}>History</p>
            <p onClick={() => navigate('/profile')}>Profile</p>
            <p onClick={logout}>Logout</p>
          </>
        ) : usertype === 'admin' ? (
          <>
            <p onClick={() => navigate('/admin')}>Dashboard</p>
            <p onClick={() => navigate('/users')}>Users</p>
            <p onClick={() => navigate('/all-orders')}>Orders</p>
            <p onClick={() => navigate('/all-transactions')}>Transactions</p>
            <p onClick={logout}>Logout</p>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar