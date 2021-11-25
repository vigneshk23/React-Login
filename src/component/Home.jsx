import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    function routeToNext(){
        navigate("./" , "/about" , "/contact") 
    }
    return(
      <div>
      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="/about" onClick={routeToNext}>About</a>
      <a href="/contact" onClick={routeToNext}>Contact</a>
      <div class="topnav-right">
        <a href="/" onClick={routeToNext}>Logout</a>
      </div>
    </div>
    </div>
    );
};
export default Home;