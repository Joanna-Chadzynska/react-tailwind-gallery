import React from "react";

const ImageCard = ({ image, searchTag }) => {
	const tags = image.tags.split(",");

	const getTagName = (tag) => searchTag(tag);

	return (
		<div className='mx-3 my-3 rounded overflow-hidden shadow-lg grid'>
			<img src={image.webformatURL} alt='random' className='w-full' />
			<div className='px-6 py-4'>
				<div className='font-bold text-purple-500 text-xl mb-2'>
					Photo by {image.user}
				</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className='px-6 py-4 text-center'>
				{tags.map((tag, index) => (
					<span
						key={index}
						onClick={() => getTagName(tag)}
						className='inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer'>
						#{tag.trim()}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImageCard;
