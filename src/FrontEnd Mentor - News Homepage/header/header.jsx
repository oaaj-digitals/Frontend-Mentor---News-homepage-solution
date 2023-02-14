import React, { useState } from "react";
import logoImg from "../images/logo.svg";
import NavItem from "./navItem";
import "./header.css";
import menuIcon from "../images/icon-menu.svg";

const Header = () => {
	const [navItems, setNavItems] = useState([
		{
			id: 1,
			title: "Home",
			link: "#",
		},
		{
			id: 2,
			title: "New",
			link: "#",
		},
		{
			id: 3,
			title: "Popular",
			link: "#",
		},
		{
			id: 4,
			title: "Trending",
			link: "#",
		},
		{
			id: 5,
			title: "Categories",
			link: "#",
		},
	]);

	return (
		<header>
			<div className="logo-Div">
				<img src={logoImg} alt="news logo" className="logo" />
			</div>
			<nav className="navbar">
				<div className="menu-icon-div">
					<img
						src={menuIcon}
						alt=""
						className="menu-icon-img"
						id="menu-icon"
					/>
				</div>
				<div id="nav-list-mobile-bg"></div>
				<ul className="nav-list" id="nav-list">
					{navItems.map((navItem) => (
						<NavItem key={navItem.id} data={navItem} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
