// src/App.js
import React from "react";
import navBar from "./components/navBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage";
import Register from "./register";
import Home from "./Home";
import User from "./UserPage";

function App() {
  return (
    <Router>
      <React.Fragment>
        <navBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
