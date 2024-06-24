// src/App.js
import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

const App = () => {
	const [generalInfo, setGeneralInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [education, setEducation] = useState({
		school: '',
		degree: '',
		date: '',
	});

	const [experience, setExperience] = useState({
		company: '',
		position: '',
		responsibilities: '',
		date: '',
	});

	const handleGeneralInfoSubmit = (data) => setGeneralInfo(data);
	const handleEducationSubmit = (data) => setEducation(data);
	const handleExperienceSubmit = (data) => setExperience(data);

	return (
		<div className="App">
			<GeneralInfo data={generalInfo} onSubmit={handleGeneralInfoSubmit} />
			<Education data={education} onSubmit={handleEducationSubmit} />
			<Experience data={experience} onSubmit={handleExperienceSubmit} />
			<button onClick={() => console.log({ generalInfo, education, experience })}>Отправить всё резюме</button>
		</div>
	);
};

export default App;
