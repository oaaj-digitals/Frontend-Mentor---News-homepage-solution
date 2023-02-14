import React, { useState } from "react";
import Post from "./post";

const NewPosts = () => {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "Hydrogen VS Electric Cars",
			body: "Will hydrogen-fueled cars ever catch up to EVs?",
		},
		{
			id: 2,
			title: "The Downsides of AI Artistry",
			body: "What are the possible adverse effects of on-demand AI image generation?",
		},
		{
			id: 3,
			title: "Is VC Funding Drying Up?",
			body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
		},
	]);

	return (
		<div className="container" id="new-posts">
			<h3 className="new-title">New</h3>
			{posts.map((post) => (
				<Post key={post.id} data={post} />
			))}
		</div>
	);
};

export default NewPosts;
