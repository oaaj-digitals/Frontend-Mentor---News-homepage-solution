import React, { useState } from "react";
import "./navitem.css";

const NavItem = ({ data }) => {
	const [navItem, setNavItem] = useState(data);

	return (
		<li className="nav-item" id={navItem.title}>
			<a href={navItem.link} className="link nav-link">
				{navItem.title}
			</a>
		</li>
	);
};

export default NavItem;
