import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function NavBar() {


  return (
    <div className="Nav">
      <header className="Nav-header">
        <Link to="/">
            Home
        </Link>
        <ul>
         <li>
            <Link to="/Login">
                Login
            </Link>
        </li>
        <li>
            <Link to="/AdminUpload">
                Admin Login
            </Link>
        </li> 
        </ul>
             
       
      </header>
    </div>
  );
}

export default NavBar;
