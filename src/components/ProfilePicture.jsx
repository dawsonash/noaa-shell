import React from "react";
import styles from "./css/ProfileBody.module.css";
import logo from "../img/logo.png"


const ProfilePicture = ({ src, alt = "Profile Picture", size = 100 }) => {
  return (
    <div className={styles.profileContainer} style={{ width: `${size}px`, height: `${size}px` }}>
      <img
        src={src || logo } 
        alt={alt}
        className={styles.profileImage}
        onError={(e) => (e.target.src = "/default-profile.png")} // Fallback if image fails to load
      />
    </div>
  );
};

export default ProfilePicture;