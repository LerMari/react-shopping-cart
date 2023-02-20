import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import {FcShop, FcSearch} from "react-icons/fc";

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

      <div className="logo-cont"><h1 id="logo">ReactCart</h1>
      <FcShop  className="nav-icon"/></div>

        <Link className="navlink" to="/">Homepage</Link>
        <Link className="navlink" to="/cart">Cart</Link>
        <Link className="navlink" to="/detail">Product Detail</Link>

        <form className="searchForm" 
        onSubmit={handleSearchSubmission}>
          <input className="nav-search" type="text" 
                 placeholder="Search for products"
                 value = {navSearchInput}
                 //onChange={(event) => setNavSearchInput(event.target.value)}
                 onChange={(event) => handleNavbarInput(event.target.value)} 
                 />
          <button className="nav-btn"><FcSearch /></button>
        </form>


    </div>
  )
}

export default Navbar