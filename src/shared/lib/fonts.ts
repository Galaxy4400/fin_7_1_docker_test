import localFont from 'next/font/local';

export const stSimpleSquare = localFont({
	src: [
		{
			path: '../fonts/STSimpleSquareRegular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-special',
	display: 'swap',
});

export const robotoSlab = localFont({
	src: [
		{
			path: '../fonts/RobotoSlab-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../fonts/RobotoSlab-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../fonts/RobotoSlab-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
	],
	variable: '--font-roboto',
	display: 'swap',
});
