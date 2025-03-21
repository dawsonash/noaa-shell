import React from "react";
import styles from "./css/CardContainerProfile.module.css";
import Card from "./Card";

const CardContainerProfile = ({ title, categories }) => {
  return (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        {categories.map((category, index) => (
          <Card key={index} category={category} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default CardContainerProfile;