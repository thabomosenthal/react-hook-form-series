/** @format */
"use client";

import React from "react";

import YoutubeForm from "@/components/feature/youtube-form";

export default function Home() {
	// const [count, setCount] = React.useState(0);

	return (
		<main className="container mx-auto">
			<section className="w-full min-h-dvh py-6">
				<YoutubeForm />
			</section>
		</main>
	);
}
