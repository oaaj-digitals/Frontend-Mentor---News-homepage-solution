import React, { useState } from "react";
import TopPost from "./topPost";

const TopPosts = () => {
	const [topPosts, setTopPost] = useState([
		{
			id: 1,
			title: "Reviving Retro PCs",
			body: "What happens when old PCs are given modern upgrades?",
			position: "01",
			imgSrc: "/images/image-retro-pcs.jpg",
			imgAlt: "Retro Pcs",
		},
		{
			id: 2,
			title: "Top 10 Laptops of 2022",
			body: "Our best picks for various needs and budgets.",
			position: "02",
			imgSrc: "/images/image-top-laptops.jpg",
			imgAlt: "Top Laptops",
		},
		{
			id: 3,
			title: "The Growth of Gaming",
			body: "How the pandemic has sparked fresh opportunities.",
			position: "03",
			imgSrc: "/images/image-gaming-growth.jpg",
			imgAlt: "Games Growth",
		},
	]);

	return (
		<div className="container" id="top-post">
			{topPosts.map((post) => (
				<TopPost key={post.id} data={post} />
			))}
		</div>
	);
};

export default TopPosts;
