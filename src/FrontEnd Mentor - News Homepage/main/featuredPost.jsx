import React from "react";
import postImg from "../images/image-web-3-desktop.jpg";

const FeaturedPost = () => {
	return (
		<div className="container" id="featured-post">
			<div className="post-img-div">
				<img src={postImg} alt="" className="post-img" />
			</div>
			<div className="post-info">
				<div className="post-title-div">
					<h2 className="post-title">
						The Bright Future of Web 3.0?
					</h2>
				</div>

				<div className="post-des-div">
					<p className="post-des text">
						We dive into the next evolution of the web that claims
						to put the power of the platforms back into the hands of
						the people. But is it really fulfilling its promise?
					</p>

					<a href="#" className="btn post-btn">
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPost;
