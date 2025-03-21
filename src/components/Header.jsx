import React from "react";
import { Home, Search, People, AccountCircle } from "@mui/icons-material";
import styles from "./css/Header.module.css";
import logo from "../img/logo.png"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
        <div className={styles.flex}>
           
          <li>
            <Home className={styles.icon} />
            <a href="/">Home</a>
          </li>
          <li>
            <Search className={styles.icon} />
            <a href="/search">Search</a>
          </li>
          <li>
            <People className={styles.icon} />
            <a href="/friends">Friends</a>
          </li>
  
        </div>
      </nav>

        <div className={styles.rightAlign}>
          <div>
            <AccountCircle className={styles.icon} />
            <a href="/profile">Profile</a>
            </div>
          </div>
    
    </header>
  );
};

export default Header;