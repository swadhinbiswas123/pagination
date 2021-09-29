import React, { useState, useEffect } from "react";
import Follower from "./components/Follower";
import useFetch from "./components/useFetch";

function App() {
	const { loading, data } = useFetch();
	const [page, setPage] = useState(0);
	const [followers, setFollowers] = useState([]);

	useEffect(() => {
		if (loading) return;
		setFollowers(data[page]);
	}, [loading, page]);

	const handlePage = (index) => {
		setPage(index);
	};
	const nextPage = () => {
		setPage((oldPage) => {
			let newPage = oldPage + 1;
			if (newPage > data.length - 1) {
				newPage = 0;
			}
			return newPage;
		});
	};

	const prevPage = () => {
		setPage((oldPage) => {
			let newPage = oldPage - 1;
			if (newPage < 0) {
				newPage = data.length - 1;
			}
			return newPage;
		});
	};

	return (
		<main>
			<div className="heading">
				<h1>{loading ? "Loading.." : "Pagination"}</h1>;
				<div className="underline"></div>
			</div>

			<section className="followers">
				<div className="container">
					{followers.map((item) => {
						return <Follower key={item.id} {...item} />;
					})}
				</div>
			</section>
			<div className="btn-container">
				<button className="prev-btn" onClick={prevPage}>
					Prev
				</button>
				{data.map((item, index) => {
					return (
						<button
							key={index}
							className={`page-btn ${index === page ? "active-btn" : null}`}
							onClick={() => handlePage(index)}
						>
							{index + 1}
						</button>
					);
				})}
				<button className="next-btn" onClick={nextPage}>
					Next
				</button>
			</div>
		</main>
	);
}

export default App;
