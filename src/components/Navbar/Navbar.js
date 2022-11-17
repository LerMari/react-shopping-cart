import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar(props) {
  const [navSearchInput, setNavSearchInput] = React.useState('');
  const handleSearchSubmission = (event) => {
    event.preventDefault();
    console.log("search");
    console.log(navSearchInput);
    props.handleProductSearch(navSearchInput);
  }

  function handleNavbarInput(searchInput){
    if (searchInput != "") {
      setNavSearchInput(searchInput);
    }
    else {
      console.log("empty textbox");
      setNavSearchInput(searchInput);
      props.handleProductSearch("");
    }

  }

  return (
    <div className="navbar">
        <Link className="navlink" to="/">Homepage</Link>
        <Link className="navlink" to="/cart">Cart</Link>
        <Link className="navlink" to="/detail">Product Detail</Link>

        <form onSubmit={handleSearchSubmission}>
          <input type="text" 
                 placeholder="search for products"
                 value = {navSearchInput}
                 //onChange={(event) => setNavSearchInput(event.target.value)}
                 onChange={(event) => handleNavbarInput(event.target.value)} 
                 />
          <button>Submit Search</button>
        </form>

    </div>
  )
}

export default Navbar