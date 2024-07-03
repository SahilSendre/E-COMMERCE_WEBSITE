import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Header(props,product) {
  
  return (


    <div className="flex shopping-card">
      {/* <div >
        <Link to="/product">
          <h2 style={{ color: "aqua" }}>Products.com</h2>
        </Link>
      </div>
      <div >
        <Link to="/cart">
          <h5 style={{ color: "aqua" }}>
            Cart <sup>{props.count}</sup>
          </h5>
        </Link>
      </div>
      <div >
        <Link to="/login">
          <h5 style={{ color: "aqua" }}>
            Login
          </h5>
        </Link>
      </div> */}

      <nav className="navbar navbar-expand-lg nav-css">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            <h3>Products.com</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item ms-5" >
                <Link className="nav-link active" aria-current="page" to="/cart" style={{ color: "white" }}>
                <h5 >Cart <sup>{props.count}</sup></h5>
                </Link>
              </li>
              <li className="nav-item ms-5 d-flex " >
                <Link className="nav-link " to="/login" style={{ color: "white" }}>
                  <h5>Login</h5>
                </Link>
              </li>
              {/* <li className="nav-item d-flex " >
                    <form className="d-flex " role="search">
                      <input className="form-control ms-5 me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-primary" type="submit">Search</button>
                     </form>
              </li>  */}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// onClick={() => props.handleShow(false)}
// onClick={() => props.handleShow(true)}
