import React from 'react';
import ReactDOM from 'react-dom/client';
import {Cards} from "./bodycards";
import  Restocards  from "./restocards";
import Nav  from './navbar';
import {createBrowserRouter,Routerpprovider , Outlet} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));



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