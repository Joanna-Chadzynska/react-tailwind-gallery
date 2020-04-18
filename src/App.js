import React, { useState, useEffect, useCallback } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState("");

	const getImages = useCallback(() => {
		fetch(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
		)
			.then((resp) => resp.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term]);

	useEffect(() => {
		getImages();
	}, [getImages]);

	return (
		<div className='container  mx-auto'>
			<ImageSearch searchText={(text) => setTerm(text)} />

			{!isLoading && images.length === 0 && (
				<h1 className='text-5xl text-center mx-auto mt-32'>No images found</h1>
			)}
			{isLoading ? (
				<h1 className='text-6xl text-center mx-auto mt-32'>Loading ...</h1>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
					{images.map((image) => (
						<ImageCard
							key={image.id}
							image={image}
							searchTag={(tag) => setTerm(tag)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
