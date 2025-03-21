import React from "react";
import ListGroup from "../components/ListGroup";
import "../index.css";
import CardContainer from "../components/CardContainerProfile";
import { cardData, raceData, profile } from "../components/data";
import ProfilePicture from "../components/ProfileBody";
import Header from "../components/Header";

function Profile() {
  return (
    <div>
      <Header></Header>
      <div>
        <ProfilePicture profile={profile} />
        <div>
          <CardContainer title="Racer History" categories={cardData} />
        </div>
        <ListGroup title="Upcoming Races" races={raceData} />
      </div>
    </div>
  );
}

export default Profile;
