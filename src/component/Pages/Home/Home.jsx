import React from 'react'
import { useLocation } from "react-router";
import SideBar from '../../SideBar/SideBar';
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import "./Home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      
      <Header />
      <div className="Home">
       <Posts />
       <SideBar />

      </div>
    </div>
  )
}
