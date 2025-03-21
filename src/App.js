import React from "react";
import ListGroup from "./components/ListGroup";
import "./index.css";
import CardContainer from "./components/CardContainerProfile";
import { cardData, raceData, profile } from "./components/data";
import ProfilePicture from "./components/ProfileBody";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Expanded from "./pages/Expanded";

function App() {
  return (
    <div>
      <Expanded></Expanded>
    </div>
  );
}

export default App;
