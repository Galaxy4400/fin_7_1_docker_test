import '@/shared/globals.css';

import { Roboto_Slab } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { GeoProvider } from '@/providers/geo-provider';

const stSimpleSquare = localFont({
	src: [
		{
			path: '../shared/STSimpleSquareRegular.woff2',
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
	preload: false,
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${robotoSans.className} ${stSimpleSquare.variable} antialiased min-h-screen flex flex-col`}
			>
				<Header />
				<GeoProvider>
					<main className="grow">{children}</main>
				</GeoProvider>
				<Footer />
			</body>
		</html>
	);
}
