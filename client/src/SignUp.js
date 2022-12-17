import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  

  const form = {name , username , password, confirmpassword }
  
  const navigate = useNavigate();
   
  //regex to confim if email address is valid & password requirement
  let regexUsername = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  //the post 
  const options = {
                  method : 'POST',
                  headers :{
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(form)
                }

//async function to post data to DB
    const postUser = async () => {
      const response = await fetch('http://localhost:5000/userCred', options);
      try{ 
      
      const data = await response.json();
       
       alert ('Success')

      console.log(data)

      }
      catch (error){
        console.log(error)
        alert ("Username exists pls Sign in")

      }
    
    }

  
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if (regexUsername.test(username)){
        if(regexPassword.test(password)){
           if (password === confirmpassword){
               postUser()

               navigate("/Login")
              
           }
           else{
            alert ("Password & Confirm Password doesn't meet")
            setPassword('')
            setConfirmPassword('')
           }
        }
        else{
          alert ("Password entered doesn't meet the requirement");  
          setPassword('')
          setConfirmPassword('')
        }
    }
    else{
          alert ("Email entered is invalid");  
          setUsername('')
          
    }


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

export default SignUp;