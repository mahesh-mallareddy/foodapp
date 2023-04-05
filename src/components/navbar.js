import { useState } from "react";
import { Link } from "react-router-dom";

export let Logo = () => (
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
            <Link to="/">
            <li>HOME</li>
            </Link>
            <Link to="/order">
            <li>ORDER</li>
            </Link>
            <Link to="/about">
            <li>ABOUT</li>
            </Link>
            <Link to="/contact">
            <li>CONTACT</li>
            </Link>
          </ul>
        </div>
        <div className='menubtn'>
          <h2 onClick ={()=> setTogglemenu(!Togglemenu)}>=</h2>
        </div>
      </div>
    );
  };
  export default Nav