/** @format */

import React from "react";

// interface YoutubeFormProps {children:React.ReactNode}

const YoutubeForm: React.FC = () => {
	return (
		<>
			<form className="grid gap-3 place-items-center">
				<div className="grid">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						className="w-96 px-2 py-1 border-2 rounded-sm"
					/>
				</div>
				<div className="grid">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-96 px-2 py-1 border-2 rounded-sm"
					/>
				</div>
				<div className="grid">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						name="channel"
						className="w-96 px-2 py-1 border-2 rounded-sm"
					/>
				</div>
				<button type="button" className="border rounded-sm px-4 py-1">
					Submit
				</button>
			</form>
		</>
	);
};

export default YoutubeForm;
