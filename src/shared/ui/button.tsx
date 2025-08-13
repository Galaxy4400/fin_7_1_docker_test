import clsx from 'clsx';
import Link from 'next/link';

export const Button = ({
	children,
	size = 'default',
	variant = 'primary',
	type = 'button',
	onClick,
	active,
	href,
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	href?: string;
	type?: 'button' | 'submit';
	size?: 'default' | 'full' | 'md';
	variant?: 'primary' | 'gradient' | 'inline';
	active?: boolean;
	onClick?: () => void;
}) => {
	const buttonClassName = clsx(
		`cursor-pointer relative inline-flex justify-center items-center text-center font-medium uppercase
		leading-none px-5 py-2.5 min-h-11 rounded-lg transition-colors`,
		{
			primary: 'bg-background text-white hover:bg-main-dark',
			gradient: 'text-white bg-gradient-main transition-opacity hover:opacity-80',
			inline: clsx(
				'text-main border border-main hover:bg-main hover:text-white',
				active ? 'bg-main text-white' : 'bg-transparent text-main',
			),
		}[variant],
		{
			default: '',
			md: 'min-w-[180px]',
			full: 'w-full',
		}[size],
	);

	return href ? (
		<Link href={href} className={buttonClassName} {...props}>
			{children}
		</Link>
	) : (
		<button onClick={onClick} className={buttonClassName} type={type} {...props}>
			{children}
		</button>
	);
};
