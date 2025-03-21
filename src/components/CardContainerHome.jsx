import React from "react";
import styles from "./css/CardContainerHome.module.css";
import Card from "./Card";
import CTAHome from "./CTAHome";

const CardContainerHome = ({ race, title, date}) => {

  return (
  <div>
      <h2 className={styles.title}>Race overview</h2>
    <div className={styles.container}>
      <div className={styles.titleDate}>
      <h1 className={styles.raceName}>{title}</h1>
      <h2 className={styles.date}>{date}</h2>
      </div>
      <div className={styles.cardWrapper}>
      {race.slice(0,3).map((race, index) => (
          <Card key={index} category={race} />
        ))}
    </div>
        <div style={{width: '100%', height: '100%'}}>
    <CTAHome></CTAHome>
      </div>
  </div>
  </div>
  );
};

export default CardContainerHome;