import React from "react";

const Follower = ({ avatar_url, login, html_url }) => {
	return (
		<article className="singleFollower">
			<img src={avatar_url} alt="Profile Pic" />
			<h4>{login}</h4>
			<a href={html_url} className="btn" target="_blank">
				View Profile
			</a>
		</article>
	);
};

export default Follower;
