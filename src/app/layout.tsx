/** @format */

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const dosis = localFont({
	src: "../../public/fonts/dosis.ttf",
	variable: "--font-dosis",
});

export const metadata: Metadata = {
	title: "React Hook Form",
	description: "react-hook-form - powered by Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${dosis.className} antialiased`}>{children}</body>
		</html>
	);
}
