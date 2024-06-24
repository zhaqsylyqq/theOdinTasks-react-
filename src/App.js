// src/App.js
import React, { useState } from 'react';
import './styles/App.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.JPG';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const App = () => {
	const imageArray = [image1, image2, image3, image4];
	const [image, setImage] = useState(imageArray);

	const shuffleImages = () =>{
		const shuffled = [...image].sort(()=>Math.random() - 0.5);
		setImage(shuffled);
	}

	return(
		<div className="App">
			{image.map((img, index) => (
				<img
					key={index}
					src={img}
					alt={`image${index + 1}`}
					onClick={shuffleImages}
					style={{ cursor: 'pointer', margin: '10px' }}
				/>
			))}
		</div>
	)

};

export default App;
