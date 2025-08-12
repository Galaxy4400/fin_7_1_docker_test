import { MenuItem } from './menu-item';

export const Menu = () => {
	return (
		<nav className="grow flex justify-center items-center">
			<ul className="hidden gap-x-4 flex-wrap justify-center md:flex">
				<MenuItem href="#">Product</MenuItem>
				<MenuItem href="#">Offer</MenuItem>
				<MenuItem href="#">FAQ</MenuItem>
				<MenuItem href="#">Blog</MenuItem>
				<MenuItem href="#">Contacts</MenuItem>
			</ul>
		</nav>
	);
};
