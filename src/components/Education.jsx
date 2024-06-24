// src/components/Education.js
import React, { useState } from 'react';

const Education = ({ data, onSubmit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [education, setEducation] = useState(data);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEducation({ ...education, [name]: value });
	};

	const handleEdit = () => setIsEditing(true);
	const handleSubmit = () => {
		setIsEditing(false);
		onSubmit(education);
	};

	return (
		<div>
			<h2>Образование</h2>
			{isEditing ? (
				<div>
					<input name="school" value={education.school} onChange={handleChange} placeholder="Школа" />
					<input name="degree" value={education.degree} onChange={handleChange} placeholder="Степень" />
					<input name="date" value={education.date} onChange={handleChange} placeholder="Дата" />
					<button onClick={handleSubmit}>Отправить</button>
				</div>
			) : (
				<div>
					<p>Школа: {education.school}</p>
					<p>Степень: {education.degree}</p>
					<p>Дата: {education.date}</p>
					<button onClick={handleEdit}>Редактировать</button>
				</div>
			)}
		</div>
	);
};

export default Education;
