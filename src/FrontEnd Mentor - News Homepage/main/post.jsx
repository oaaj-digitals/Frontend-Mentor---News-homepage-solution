import React, { useState } from "react";

const Post = ({ data }) => {
	const [post, setPost] = useState(data);

	return (
		<React.Fragment>
			<div className="new-post" id={`new-post-${post.id}`}>
				<h4 className="new-post-title">{post.title}</h4>
				<p className="new-post-des text">{post.body}</p>
			</div>

			<hr />
		</React.Fragment>
	);
};

export default Post;
