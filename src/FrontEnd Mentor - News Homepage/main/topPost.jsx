import React, { useState } from "react";
import "./topPost.css";

const TopPost = ({ data }) => {
	const [topPost, setTopPost] = useState(data);

	return (
		<div className="top-post" id={`top-post-${topPost.id}`}>
			<img
				src={process.env.PUBLIC_URL + topPost.imgSrc}
				alt={topPost.imgALt}
				className="top-post-img"
			/>

			<div className="top-post-info">
				<p className="top-post-numb">{topPost.position}</p>
				<a href="#" className="link top-post-title ">
					{topPost.title}
				</a>
				<p className="top-post-dex text">{topPost.body}</p>
			</div>
		</div>
	);
};

export default TopPost;
