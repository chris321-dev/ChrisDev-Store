import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
<<<<<<< HEAD
    <div>
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Navbar */}
          <nav id="nav" className="navbar navbar-expand-sm bg-dark navbar-dark py-3 fixed-top">
            <div className="container">
              <a href="#" className="navbar-brand" id="store-logo">CHRIS.DEV STORE</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                  <li>
                    <a><div className="nav-item"><Link to="/ChrisDev-Store" className="nav-link"> HOME </Link></div></a>
                  </li>
                  <li>
                    <a><div className="nav-item"><Link to="/shop" className="nav-link"> SHOP </Link></div></a>
                  </li>
                  <li>
                    <a><div className="nav-item"><Link to="/contact" className="nav-link"> CONTACT </Link></div></a>
                  </li>
                  <li>
                    <a><div className="nav-item"><Link className="nav-link" to="/cart">
                    <ShoppingCart size={32} />
                    </Link></div></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar end  */}
        </div></header>
=======
    <div className="navbar">
      <div className="links">
        <Link to="/ChrisDev-Store"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
>>>>>>> 74faa43965f12d8b4b53ba4e8479fdcbf63785af
    </div>
    
  );
};

