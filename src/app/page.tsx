/** @format */

import YoutubeForm from "@/components/feature/youtube-form";
import Image from "next/image";

export default function Home() {
	return (
		<main className="container mx-auto">
			<section className="w-full min-h-dvh">
				<YoutubeForm />
			</section>
		</main>
	);
}
