import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { cardData, raceData, profile } from "./components/data";
import ProfilePicture from "./components/ProfileBody";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Expanded from "./pages/Expanded";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expanded" element={<Expanded />} />
      </Routes>
    </Router>
  );
}

export default App;
