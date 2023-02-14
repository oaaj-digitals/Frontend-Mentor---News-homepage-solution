import React, { useState } from "react";
import FeaturedPost from "./featuredPost";
import NewPosts from "./newPosts";

const Main = () => {
	return (
		<main>
			<FeaturedPost />
			<NewPosts />
		</main>
	);
};

export default Main;
