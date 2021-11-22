import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    function routeToNext(){
        navigate("./") 
    }
    return(
  <div class="bg-img">
  <div class="container">
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="/" onClick={routeToNext}>Logout</a>
    </div>
  </div>
</div>

        
        
        
    );
};
export default Home;