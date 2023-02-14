import React, { useState } from "react";
import logoImg from "../images/logo.svg";
import NavItem from "./navItem";

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
			<div class="logo-Div">
				<img src={logoImg} alt="news logo" class="logo" />
			</div>
			<nav className="navbar">
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