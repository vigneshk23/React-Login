import React from "react";
import "./Contact.css"
import { useNavigate } from "react-router-dom";
const Contact = () => {
    const navigate = useNavigate();
    function routeToNext(){
        navigate("./" , "/home" , "/about") 
    }
    return(
      <div>
      <div class="topnav">
      <a href="/home" onClick={routeToNext}>Home</a>
      <a href="/about" onClick={routeToNext}>About</a>
      <a class="active" href="/contact">Contact</a>
      <div class="topnav-right">
        <a href="/" onClick={routeToNext}>Logout</a>
      </div>
    </div>
    
    <div class="container">
  <form action="action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
        
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="email">Email</label>
      </div>
      <div class="col-75">
        <input type="text" id="email" name="Email" placeholder="Your Email ID.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>
</div>

    );
    };
    export default Contact;