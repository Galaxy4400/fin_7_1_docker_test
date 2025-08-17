export const Menu = ({ items }: { items: React.ReactNode[] }) => {
	return (
		<nav className="flex grow items-center justify-center">
			<ul className="hidden flex-wrap justify-center gap-x-4 md:flex">{items}</ul>
		</nav>
	);
};
