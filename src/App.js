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

	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [lastClicked, setLastClicked] = useState(null);

	const handleImageClick = (index) => {
		if (lastClicked===index){
			setScore(0);
			setBestScore(null);
		} else{
			setScore(score + 1);
			setLastClicked(index);

			if (score + 1 > bestScore) {
				setBestScore(score + 1);
			}
		}
		shuffleImages();
	};

	return(
		<div className="App">
			<div className='ScoreBoard'>
				<p> Your score: {score}</p>
				<p>Your best score: {bestScore}</p>
			</div>
			{image.map((img, index) => (
				<img
					key={index}
					src={img}
					alt={`image${index + 1}`}
					onClick={() => handleImageClick(index)}
					style={{ cursor: 'pointer' }}
				/>
			))}

		</div>
	)

};

export default App;
