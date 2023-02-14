import React, { useState, useEffect } from "react";
import logoImg from "../images/logo.svg";
import NavItem from "./navItem";
import "./header.css";
import menuIcon from "../images/icon-menu.svg";
import menuCloseIcon from "../images/icon-menu-close.svg";

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

	const [menuBtn, setMenuBtn] = useState(
		document.getElementById("menu-icon")
	);
	const [menu, setMenu] = useState(document.getElementById("nav-list"));
	const [menuBg, setMenuBg] = useState(
		document.getElementById("nav-list-mobile-bg")
	);

	useEffect(() => {
		setMenu(document.getElementById("nav-list"));
		setMenuBtn(document.getElementById("menu-icon"));
		setMenuBg(document.getElementById("nav-list-mobile-bg"));

		console.log(menuBtn);
		console.log(menu);
		console.log(menuBg);
	}, [menu, menuBg, menuIcon]);

	const escClose = (e) => {
		if (e.key == "Escape") {
			close(menuBtn, menu, menuBg);
			console.log(e);
		}
	};

	const close = (menuBtn, menu, menuBg) => {
		menuBtn.src = menuIcon;
		menuBtn.classList.remove("opened");
		menu.style.display = "none";
		menuBg.style.display = "none";
		menuBtn.style.position = "static";
		window.removeEventListener("keyup", escClose);
	};

	const open = (menuBtn, menu, menuBg) => {
		menuBtn.src = menuCloseIcon;
		menuBtn.classList.add("opened");
		menuBtn.style.position = "fixed";
		menu.style.display = "flex";
		menuBg.style.display = "block";
		window.addEventListener("keyup", escClose);
	};

	const menuClick = () => {
		if (menuBtn.classList.contains("opened")) {
			close(menuBtn, menu, menuBg);
			// menuBtn.classList.add("closed");
		} else {
			open(menuBtn, menu, menuBg);
		}
	};

	return (
		<header>
			<div className="logo-Div">
				<img src={logoImg} alt="news logo" className="logo" />
			</div>
			<nav className="navbar">
				<div className="menu-icon-div" onClick={() => menuClick()}>
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
