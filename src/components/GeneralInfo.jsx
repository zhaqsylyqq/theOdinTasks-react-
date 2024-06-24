// src/components/GeneralInfo.js
import React, { useState } from 'react';

const GeneralInfo = ({ data, onSubmit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [info, setInfo] = useState(data);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};

	const handleEdit = () => setIsEditing(true);
	const handleSubmit = () => {
		setIsEditing(false);
		onSubmit(info);
	};

	return (
		<div>
			<h2>Общая информация</h2>
			{isEditing ? (
				<div>
					<input name="name" value={info.name} onChange={handleChange} placeholder="Имя" />
					<input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
					<input name="phone" value={info.phone} onChange={handleChange} placeholder="Телефон" />
					<button onClick={handleSubmit}>Отправить</button>
				</div>
			) : (
				<div>
					<p>Имя: {info.name}</p>
					<p>Email: {info.email}</p>
					<p>Телефон: {info.phone}</p>
					<button onClick={handleEdit}>Редактировать</button>
				</div>
			)}
		</div>
	);
};

export default GeneralInfo;
