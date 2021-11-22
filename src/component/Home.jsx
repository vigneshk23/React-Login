import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    function routeToNext(){
        navigate("./") 
    }
    return(
      <div>
      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="topnav-right">
        <a href="/" onClick={routeToNext}>Logout</a>
      </div>
    </div><h1>WELCOME TO HOME</h1>
    </div>
    );
};
export default Home;