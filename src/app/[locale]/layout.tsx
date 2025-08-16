import '@/shared/globals.css';

import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header';
import { GeoProvider } from '@/providers/geo-provider';
import { AVAILABLE_LANGUAGES } from '@/shared/constants';
import { robotoSlab, stSimpleSquare } from '@/shared/lib/fonts';

export async function generateStaticParams() {
	return AVAILABLE_LANGUAGES.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!hasLocale(AVAILABLE_LANGUAGES, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body
				className={`${robotoSlab.className} ${stSimpleSquare.variable} antialiased min-h-screen flex flex-col`}
			>
				<NextIntlClientProvider>
					<Header />
					<GeoProvider>
						<main className="grow">{children}</main>
					</GeoProvider>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
