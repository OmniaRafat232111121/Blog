import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user =false;
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <i className="NavbarIcon fab fa-facebook-square"></i>
        <i className="NavbarIcon fab fa-instagram-square"></i>
        <i className="NavbarIcon fab fa-pinterest-square"></i>
        <i className="NavbarIcon fab fa-twitter-square"></i>
      </div>
      <div className="NavbarCenter">
        <ul className="NavbarList">
          <li className="NavbarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="NavbarListItem">
          <Link className="link" to="/">
              About
            </Link>   
          </li>
          <li className="NavbarListItem">CONTACT</li>
          <li className="NavbarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="NavbarListItem">
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="NavbarRight">
        
      {user ? (
          <Link className="link" to="/Setting">
            <img
              className="NavbarImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="NavbaList">
            <li className="NavbarListItem">
               
               <Link className="link" to="/Login">
                LOGIN
              </Link>
            
            </li>
            <li className="NavbarListItem">
             
             <Link className="link" to="/Register">
                REGISTER
              </Link>
             
            </li>
          </ul>
        )};
        <i className="NavbarSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
        }