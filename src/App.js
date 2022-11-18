import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";
import WishList from "./components/WishList";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
