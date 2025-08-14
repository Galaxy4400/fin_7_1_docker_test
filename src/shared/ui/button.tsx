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
	disabled = false,
}: {
	children?: React.ReactNode;
	size?: 'default' | 'full' | 'md';
	variant?: 'primary' | 'gradient' | 'inline';
	type?: 'button' | 'submit';
	onClick?: () => void;
	active?: boolean;
	href?: string;
	disabled?: boolean;
}) => {
	const buttonClassName = clsx(
		`cursor-pointer relative inline-flex justify-center items-center text-center font-medium uppercase
		leading-none px-5 py-2.5 min-h-11 rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none`,
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
		<Link href={href} className={buttonClassName}>
			{children}
		</Link>
	) : (
		<button onClick={onClick} className={buttonClassName} type={type} disabled={disabled}>
			{children}
		</button>
	);
};
