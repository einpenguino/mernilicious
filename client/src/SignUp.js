import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function SignUp() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confimpassword, setConfirmPassword] = useState('')

  const form = {username , password, confimpassword }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
    setUsername('')
    setPassword('')
    setConfirmPassword('')


    const options = {
          method : 'POST',
          headers :{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(form)
        }

        fetch('http://localhost:5000', options);

  }


  return (
    <div className="Sign-Up">
      <header className="Sign-Up"> 
       
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
         <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
            <input 
             type="text"
             required
             value = {username}
             onChange = {(e) => setUsername(e.target.value)}
            />
           <br></br>

          <label>Password: </label>
          <input
          type="text" 
          required
          value = {password}
          onChange = {(e) => setPassword(e.target.value)}
          />
         <br></br>

         <label>Confirm Password: </label>
          <input
          type="text" 
          required
          value = {confimpassword}
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

export default SignUp;