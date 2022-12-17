import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';


function Home() {


  return (
    <div className="Home">
      <header className="Home-header">     
       <NavBar/>
       
       <div>
        <h1>Hi</h1>
       </div>

      </header>
    </div>
  );
}

export default Home;
