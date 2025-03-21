import React from "react";
import styles from "./css/Card.module.css";

const Card = ({ category }) => {
  return (
    <div>
      <h2 className={styles.cardLabel}>{category.title}</h2>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          {category.items.map((item, index) => (
            <div key={index} className={styles.listItem}>
              {/* ✅ Check if the item has an image */}
              {item.image ? (
                <img
                  src={item.image}
                  alt="Race Image"
                  className={styles.image}
                  style={{ width: "149px", height: "220px", borderRadius: "10px" }}
                />
              ) : (
                <>
                  <span className={styles.eventName}>{item.name}</span>
                  <span className={styles.eventTime}>{item.content}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;