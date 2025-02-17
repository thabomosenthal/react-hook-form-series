/** @format */

import React from "react";

// interface YoutubeFormProps {children:React.ReactNode}

const YoutubeForm: React.FC = () => {
	return (
		<>
			<form action="">
				<div className="grid">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" />
				</div>
				<div className="grid">
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" />
				</div>
				<div className="grid">
					<label htmlFor="channel">Channel</label>
					<input type="text" id="channel" name="channel" />
				</div>
				<button>Submit</button>
			</form>
		</>
	);
};

export default YoutubeForm;
