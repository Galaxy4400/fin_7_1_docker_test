import '@/shared/globals.css';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { GeoProvider } from '@/providers/geo-provider';
import { robotoSlab, stSimpleSquare } from '@/shared/lib/fonts';

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
