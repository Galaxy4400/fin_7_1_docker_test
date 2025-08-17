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
			<Link className="hover:text-main px-2 py-1 leading-[140%] text-white transition-colors" href={href}>
				{children}
			</Link>
		</li>
	);
};
