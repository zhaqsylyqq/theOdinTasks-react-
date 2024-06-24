// src/components/Experience.js
import React, { useState } from 'react';

const Experience = ({ data, onSubmit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [experience, setExperience] = useState(data);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setExperience({ ...experience, [name]: value });
	};

	const handleEdit = () => setIsEditing(true);
	const handleSubmit = () => {
		setIsEditing(false);
		onSubmit(experience);
	};

	return (
		<div>
			<h2>Опыт работы</h2>
			{isEditing ? (
				<div>
					<input name="company" value={experience.company} onChange={handleChange} placeholder="Компания" />
					<input name="position" value={experience.position} onChange={handleChange} placeholder="Должность" />
					<textarea name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Обязанности" />
					<input name="date" value={experience.date} onChange={handleChange} placeholder="Дата" />
					<button onClick={handleSubmit}>Отправить</button>
				</div>
			) : (
				<div>
					<p>Компания: {experience.company}</p>
					<p>Должность: {experience.position}</p>
					<p>Обязанности: {experience.responsibilities}</p>
					<p>Дата: {experience.date}</p>
					<button onClick={handleEdit}>Редактировать</button>
				</div>
			)}
		</div>
	);
};

export default Experience;
