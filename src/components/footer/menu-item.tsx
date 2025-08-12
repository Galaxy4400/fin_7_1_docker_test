import Link from 'next/link';

export const MenuItem = ({
	className,
	children,
	href,
}: {
	className?: string;
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<li className={className}>
			<Link className="text-white leading-[140%] py-1 px-2 transition-colors hover:text-main" href={href}>
				{children}
			</Link>
		</li>
	);
};
