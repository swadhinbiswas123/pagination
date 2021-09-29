import React, { useState, useEffect } from "react";
import Utlis from "./Utlis";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const getProfile = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setData(Utlis(data));
		setLoading(false);
	};

	useEffect(() => {
		getProfile();
	}, []);

	return { loading, data };
};

export default useFetch;
