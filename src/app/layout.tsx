import './globals.css';

import { Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

const stSimpleSquare = localFont({
	src: [
		{
			path: 'STSimpleSquareRegular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-special',
	display: 'swap',
});

const robotoSans = Roboto_Slab({
	variable: '--font-roboto',
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${robotoSans.variable} ${stSimpleSquare.variable} antialiased`}>{children}</body>
		</html>
	);
}
