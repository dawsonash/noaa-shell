import React from "react";
import styles from "./css/ProfileBody.module.css";
import ProfilePicture from "./ProfilePicture";

const ProfileBody = ({ profile }) => {
  return (
    <div className={styles.profileContainer}>
      <div className="flex-direction: column, align-items: center">
      {/* Profile Picture */}
      <div className={styles.profileImage}>
        <ProfilePicture src={profile.image} size={120} />
      </div>

      {/* Profile Details */}
      <h1 className={styles.name}>{profile.name}</h1>
      <h2 className={styles.location}>{profile.location}</h2>
      <h3 className={styles.category}>{profile.category}</h3>
      </div>
    </div>
  );
};

export default ProfileBody;