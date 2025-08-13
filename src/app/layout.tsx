import '@/shared/globals.css';

import localFont from 'next/font/local';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { GeoProvider } from '@/providers/geo-provider';

const stSimpleSquare = localFont({
	src: [
		{
			path: '../shared/fonts/STSimpleSquareRegular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-special',
	display: 'swap',
});

const robotoSlab = localFont({
	src: [
		{
			path: '../shared/fonts/RobotoSlab-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../shared/fonts/RobotoSlab-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../shared/fonts/RobotoSlab-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
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
			<body
				className={`${robotoSlab.className} ${stSimpleSquare.variable} antialiased min-h-screen flex flex-col`}
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
