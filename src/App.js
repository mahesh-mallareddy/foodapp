import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cards } from "./components/bodycards";
import Restocards from "./components/restocards";
import Nav from './components/navbar';
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom"
import About from './components/about';
import Contact from './components/contact';
import RestoFetchdata from './components/RestoFetchdata';

const root = ReactDOM.createRoot(document.getElementById('root'));



let Test = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
let Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Restocards />,
      },
      {
        path: "/restomenu/:paramsid",
        element: <RestoFetchdata />,
      },

    ],
  }
]);

root.render(<RouterProvider router={Approuter} />)