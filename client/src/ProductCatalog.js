import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function ProductCatalog() {

const [prodDetails, setProdDetails] = useState('')

useEffect(() => {
  // declare the async data fetching function
  const fetchData = async () => {
    // get the data from the api
    const data = await fetch('http://localhost:5000/prod');
    // convert the data to json
    const json = await data.json();

    // set state with the result
    let record = "";
    for (let object = 0; object < json.length; object++) {
         for (let details in json[object]){
            record += json[object][details] + " "
         }
    }
    setProdDetails(record);
  }

  fetchData()

},[])


  return (
    <div className="Product">
      <header className="Product-header">    
        
        <Link to="/">
            Home
        </Link>
        <br></br>

        <Link to="/AdminUpload">
            AdminUpload
        </Link>

       <div>
        <h1>Product List</h1>
         <p>{prodDetails}</p>
       </div>
      </header>
    </div>
  );
}

export default ProductCatalog