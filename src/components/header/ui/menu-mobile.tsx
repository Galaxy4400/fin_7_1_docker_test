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
				`bg-background fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center transition-all
				duration-300`,
				isOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0',
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
