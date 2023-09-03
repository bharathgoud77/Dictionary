import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div className='navbar'>

    
        <div>
            <h4>Dictionary App</h4>
        </div>

        <div>

        
        <nav className='link'>
        <Link className="Link" to="/">Home</Link>
        <Link className="Link" to="/history">History</Link>
        </nav>

        </div>
    </div>    
  );
};

export default Navbar;