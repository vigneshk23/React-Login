import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react'
import profile from "./image/profile.jpg"

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function routeToNext(){
        console.log(name,password); 
        if (name ==="Vignesh"&&password==="1234")  {
          navigate('/home');
        } else {
          alert("Invalid Username & Password !");
        }
      }
return (

<div className="main">
<div className="sub-main">
<div>
<div className="imgs">
<div className="container-image">
<img src={profile} alt="profile" className="profile"/>
<h1 >LoginPage</h1>
</div>
</div>
<br></br>
<div>
<input type="text" placeholder="     username" onChange={e=> setName(e.target.value)}></input>
</div>
<div className="second-input">
<input type="password" placeholder="     password"  onChange={e=> setPassword(e.target.value)}></input>
</div>
<div className="login-button">
<button onClick={routeToNext}>login</button>
</div>

</div>
</div>
</div>
);
};

export default Login;