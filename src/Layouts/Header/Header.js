import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Assets/Data/DataContext';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCoffee  } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const { token, logout } = useContext(DataContext);
    console.log(token)
    return (
        <div className="header-container">
            <div className="left-links">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="right-info">
                {token ? (
                    <div>
                        <span>Welcome, {token.UserName}</span>
                        <img src={token.AvatarUrl} width={50} className='imgAvatar' alt="User Avatar" />
                        <FontAwesomeIcon icon={faCoffee} />
                        <button onClick={()=>{logout(token.Email)}} className='btn btn-warning'>Logout</button>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    );
}

export default Header;