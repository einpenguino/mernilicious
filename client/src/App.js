import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import ProductUpload from './ProductUpload';
import Login from './Login';
import SignUp from './SignUp';
import ProductCatalog from './ProductCatalog';

function App() {


  return (
    <div className="App">
      <header className="App-header">     
       <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/AdminUpload" element={<ProductUpload/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/ProductCatalog" element={<ProductCatalog/>}/>
         </Routes>
       </div>

      </header>
    </div>
  );
}

export default App;
