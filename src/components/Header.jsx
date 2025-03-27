import React from 'react';
import { Home, Search, People, AccountCircle } from '@mui/icons-material';
import styles from './css/Header.module.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" className={styles.logoImage} />
				</div>
				<div className={styles.flex}>
					<li>
						<Link to="/">
						<Home className={styles.icon} />
							<span>Home</span>
						</Link>
					</li>
					<li>
					<Link to="/search">
							<Search className={styles.icon} />
							<span>Search</span>
						</Link>
					</li>
					<li>
					<Link to="/friends">
							<People className={styles.icon} />
							<span>Friends</span>
						</Link>
					</li>
				</div>
				<li className={styles.rightAlign}>
				<Link to="/profile">
						<AccountCircle className={styles.icon} />
						<span>Profile</span>
					</Link>
				</li>
			</nav>
		</header>
	);
};

export default Header;
