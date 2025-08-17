export const Menu = ({ items, subitems }: { items: React.ReactNode[]; subitems: React.ReactNode[] }) => {
	return (
		<nav className="flex grow flex-col items-center justify-center gap-3">
			<ul className="flex flex-col flex-wrap justify-center gap-x-4 gap-y-1 text-center md:flex-row">
				{items}
				{/* <MenuItem href="#">Product</MenuItem>
				<MenuItem href="#">Offer</MenuItem>
				<MenuItem href="#">FAQ</MenuItem>
				<MenuItem href="#">Blog</MenuItem>
				<MenuItem href="#">Contacts</MenuItem> */}
			</ul>
			<div className="bg-main h-px w-[150px] justify-items-center"></div>
			<ul className="flex flex-col flex-wrap justify-center gap-x-4 gap-y-1 text-center md:flex-row">
				{subitems}
				{/* <MenuItem href="#">Privacy Policy</MenuItem>
				<MenuItem href="#">Conditions of Use</MenuItem> */}
			</ul>
		</nav>
	);
};
