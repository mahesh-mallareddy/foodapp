import React from 'react';
import ReactDOM from 'react-dom/client';
import { Cards } from "./components/bodycards";
import Restocards from "./restocards";
import Nav from './components/navbar';
import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom"
import About from './components/about';
import Contact from './components/contact';


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
        path: "/",
        element: <Restocards />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

    ],
  }
]);

root.render(<RouterProvider router={Approuter} />)