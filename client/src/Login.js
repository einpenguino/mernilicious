import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const form = {username , password}
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
    setUsername('')
    setPassword('')

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
    <div className="App">
      <header className="App-header">

        <Link to="/">
            Home
        </Link>

        <h1>Login</h1>
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
          <input type="submit" value="Submit" />
        </form>
         
         <Link to="/SignUp">
            SignUp
        </Link>
        
      </header>
    </div>
  );
}

export default Login;
