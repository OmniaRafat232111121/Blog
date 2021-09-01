import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className='Login'>
            <span className="LoginTitle">
                Login
            </span>
            <form className="LoginForm">
            <label> Email</label>
            <input  className="LoginInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
        <input className="LoginInput" type="password" placeholder="Enter your password..." />
        <button className="LoginButton">Login</button>
        <button className="LoginRegisterButton">
            <Link className="link"  to="/Register">Register</Link>
        </button>
            </form>
        </div>
    )
}
