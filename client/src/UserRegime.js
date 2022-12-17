import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';


function UserRegime() {

    return (
    <div className="UserRegime">
      <header className="UserRegime"> 
       
      <ul>
        <li>
        <Link to="/">
            Home
        </Link>

        </li>
        <Link to="/Login">
           Login
        </Link>
        <li>
            
        </li>
       </ul>   

       <div>
         <h1></h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
            <input 
             type="text"
             required
             value = {name}
             placeholder = "Enter your name"
             onChange = {(e) => setName(e.target.value)}
            />
           <br></br>

          <label>Username:</label>
            <input 
             type="email"
             required
             value = {username}
             placeholder = "Enter an email address"
             onChange = {(e) => setUsername(e.target.value)}
            />
           <br></br>

          <label>Password: </label>
          <input
          type="password" 
          required
          value = {password}
          placeholder = "Password"
          onChange = {(e) => setPassword(e.target.value)}
          />
         <br></br>

         <label>Confirm Password: </label>
          <input
          type="password" 
          required
          value = {confirmpassword}
          placeholder = "Confirm Password"
          onChange = {(e) => setConfirmPassword(e.target.value)}
          />
         <br></br>
          
          <input type="submit" value="Submit" />
        </form>
       </div>

      </header>
    </div>
  );
}


export default UserRegime;