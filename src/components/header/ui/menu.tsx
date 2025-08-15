export const Menu = ({ items }: { items: React.ReactNode[] }) => {
	return (
		<nav className="grow flex justify-center items-center">
			<ul className="hidden gap-x-4 flex-wrap justify-center md:flex">{items}</ul>
		</nav>
	);
};
