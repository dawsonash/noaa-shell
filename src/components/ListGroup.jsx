import styles from "./css/ListGroup.module.css";

const ListGroup = ({ title, races }) => {
  return (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.listGroup}>
      {races.map((race, index) => (
        <div key={index} className={styles.listItem}>
          <span>{race.name}</span>
          <span>{race.distance}</span>
          <span>{race.date}</span>
          <button className={styles.button}>Learn more</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ListGroup;