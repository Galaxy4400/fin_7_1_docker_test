import clsx from 'clsx';
import { ReactNode } from 'react';

export const Container = ({
	className,
	children,
	size = 'md',
}: {
	children?: ReactNode;
	className?: string;
	size?: '2xs' | 'xs' | 'sm' | 'md';
}) => {
	return (
		<div
			className={clsx(
				className,
				'mx-auto',
				{
					'2xs': 'max-w-[638px] px-[15px] md:max-w-[708px] md:px-[50px]',
					xs: 'max-w-[912px] px-[15px] md:max-w-[982px] md:px-[50px]',
					sm: 'max-w-[1062px] px-[15px] md:max-w-[1132px] md:px-[50px]',
					md: 'max-w-[1278px] px-[15px] md:max-w-[1348px] md:px-[50px]',
				}[size],
			)}
		>
			{children}
		</div>
	);
};
