import React from "react";

const Utlis = (followers) => {
	const profilesPerPage = 12;
	const numberOfPages = Math.ceil(followers.length / profilesPerPage);

	const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
		const start = index * profilesPerPage;
		return followers.slice(start, start + profilesPerPage);
	});
	return newFollowers;
	console.log(newFollowers);
};

export default Utlis;
