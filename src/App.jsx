import React from 'react';
import './App.css';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./pages/Home";

import { NotFound } from "./pages/NotFound";
// import { Booklayout } from './BookLayout';
import { BookRoutes } from './BookRoutes';

import "./style.css";


function App() {
  // used to get some state data like state, search, pathname, key, hash
  const location = useLocation();
  return (
    <>
      {/* <Routes location="/books">

        <Route path="/books" element={< h1>Extra Content</h1>} />

      </Routes> */}
      <nav>
        <ul>
          <li> <NavLink to="/"> Home</NavLink></li>
          <li><NavLink end to="/books">Books</NavLink></li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add a asterik after the base part to match routes nested under it */}
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
