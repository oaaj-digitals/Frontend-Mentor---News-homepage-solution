import React, { useState } from "react";
import FeaturedPost from "./featuredPost";
import NewPosts from "./newPosts";
import TopPosts from "./topPosts";
import "./main.css";

const Main = () => {
	return (
		<main>
			<FeaturedPost />
			<NewPosts />
			<TopPosts />
		</main>
	);
};

export default Main;
