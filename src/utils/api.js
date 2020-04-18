export const fetchPictures = (setImages, setIsLoading) => {
	fetch(
		`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
	)
		.then((resp) => resp.json())
		.then((data) => {
			setImages(data.hits);
			setIsLoading(false);
		})
		.catch((err) => console.log(err));
};
