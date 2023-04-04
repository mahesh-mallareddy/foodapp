import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import {Cards} from "./bodycards";
import  Restocards  from "./restocards";

const root = ReactDOM.createRoot(document.getElementById('root'));

let Logo = () => (
  <h2>LOGO</h2>
)

let Nav = () => {
  const[Togglemenu,setTogglemenu] = useState(false)
  return (
    <div className='navbar'>
      <Logo />
      <div  className= { Togglemenu ? "navbar navlist mobileactive" : "navlist"}
       >
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>ORDER</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='menubtn'>
        <h2 onClick ={()=> setTogglemenu(!Togglemenu)}>=</h2>
      </div>
    </div>
  );
};

let Test = () => {
  return(
    <>
    <Nav/>
    <Cards/>
    <Restocards/>
    </>
  )
}
root.render(<Test/>)