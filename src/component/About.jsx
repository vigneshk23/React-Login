import React from "react";
import "./About.css"
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    function routeToNext(){
        navigate("./" , "/home" , "/contact") 
    }
    return(
      <div>
      <div class="topnav">
      <a href="/home" onClick={routeToNext}>Home</a>
      <a class="active" href="/about">About</a>
      <a href="/contact" onClick={routeToNext}>Contact</a>
      <div class="topnav-right">
        <a href="/" onClick={routeToNext}>Logout</a>
      </div>
    </div>
    <div class="about-section">
  <h1>About Us</h1>
  <p>We are more than a digital marketing agency .</p>
  <p>We partner with growth-minded companies helping them accelerate their digital marketing results . </p>
</div>

<h2>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Vignesh</h2>
        <p class="title">CEO & Founder</p>
        <p>vignesh@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="container">
        <h2>Nagaraj</h2>
        <p class="title">Art Director</p>
        <p>nagaraj@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
  
      <div class="container">
        <h2>Saravanan</h2>
        <p class="title">Designer</p>
        <p>saravanan@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};
export default About;