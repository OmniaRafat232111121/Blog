import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className='Register'>
            <span className="RegisterTitle">
                Register
            </span>
            <form className="RegisterForm">
            <label>UserName</label>
            <input  className="RegisterInput" type="text" placeholder="Enter your username..." />
            <label> Email</label>
            <input  className="RegisterInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
        <input className="RegisterInput" type="password" placeholder="Enter your password..." />
        <button className="RegisterButton">Register</button>
        <button className="RegisterLoginButton">
        <Link  className="link"to="/Login">Login
        </Link>
        </button>
            </form>
        </div>
    )
}
