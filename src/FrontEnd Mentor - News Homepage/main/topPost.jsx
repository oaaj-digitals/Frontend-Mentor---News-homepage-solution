import React, { useState } from "react";

const TopPost = ({ data }) => {
	const [topPost, setTopPost] = useState(data);

	return (
		<div className="recent-post" id={`recent-post-${topPost.id}`}>
			<img
				src={process.env.PUBLIC_URL + topPost.imgSrc}
				alt={topPost.imgALt}
				className="recent-post-img"
			/>

			<div className="recent-post-info">
				<p className="recent-post-numb">{topPost.position}</p>
				<a href="#" className="link recent-post-title ">
					{topPost.title}
				</a>
				<p className="recent-post-dex text">{topPost.body}</p>
			</div>
		</div>
	);
};

export default TopPost;
