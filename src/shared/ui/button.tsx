import clsx from 'clsx';
import Link from 'next/link';

export const Button = ({
	className,
	children,
	// size,
	variant,
	href,
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	href?: string;
	// size: 'sm' | 'md';
	variant: 'primary' | 'gradient' | 'inline';
}) => {
	const buttonClassName = clsx(
		className,
		`cursor-pointer relative inline-flex justify-center items-center text-center font-medium uppercase
		leading-none px-5 py-2.5 min-h-11 min-w-[180px] rounded-lg transition-colors`,
		{
			primary: 'bg-background text-white hover:bg-main-dark',
			gradient: 'text-white bg-gradient-main transition-opacity hover:opacity-80',
			inline: 'text-main bg-transparent border border-main hover:bg-main hover:text-white',
		}[variant],
	);

	return href ? (
		<Link href={href} className={buttonClassName} {...props}>
			{children}
		</Link>
	) : (
		<button className={buttonClassName} {...props}>
			{children}
		</button>
	);
};
