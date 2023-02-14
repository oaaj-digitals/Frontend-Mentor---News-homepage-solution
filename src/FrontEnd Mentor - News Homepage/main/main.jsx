import React, { useState } from "react";
import FeaturedPost from "./featuredPost";
import NewPosts from "./newPosts";
import TopPosts from "./topPosts";

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
