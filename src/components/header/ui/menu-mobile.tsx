import clsx from 'clsx';

export const MenuMobile = ({
	isOpen,
	actions,
	items,
}: {
	isOpen: boolean;
	actions: React.ReactNode;
	items: React.ReactNode[];
}) => {
	return (
		<div
			className={clsx(
				`z-50 fixed top-0 left-0 w-full h-screen transition-all duration-300 bg-background flex items-center
				justify-center`,
				isOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none invisible',
			)}
		>
			<div className="grid gap-13">
				<div className="flex gap-6 sm:hidden">{actions}</div>
				<nav className={clsx('flex items-center justify-center')}>
					<ul className="grid gap-3 text-center text-2xl">{items}</ul>
				</nav>
			</div>
		</div>
	);
};
