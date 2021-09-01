import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Pages/Home/Home';
import Register from './component/Pages/Register/Register';
import Single from './component/Pages/Single/Single';
import Login from './component/Pages/Login/Login';

import Setting from './component/Pages/Setting/Setting';
import Write from './component/Pages/Write/Write';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function App() {
    const currentUser = false;

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Posts">
                    <Home />
                </Route>
                <Route path="/Register">
                    {currentUser ? <Home /> : <Register />}
                </Route>
                <Route path="/Login">{currentUser ? <Home /> : <Login />}</Route>
                <Route path="/Post/:id">
                    <Single />
                </Route>
                <Route path="/Write">{currentUser ? <Write /> : <Login />}</Route>
                <Route path="/Setting">
                    {currentUser ? <Setting /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
}
