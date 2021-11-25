import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
} 
export default App;
