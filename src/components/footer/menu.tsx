import { MenuItem } from './menu-item';

export const Menu = () => {
	return (
		<nav className="grow flex justify-center items-center flex-col gap-3">
			<ul className="gap-x-4 gap-y-1 flex-wrap justify-center flex flex-col md:flex-row text-center">
				<MenuItem href="#">Product</MenuItem>
				<MenuItem href="#">Offer</MenuItem>
				<MenuItem href="#">FAQ</MenuItem>
				<MenuItem href="#">Blog</MenuItem>
				<MenuItem href="#">Contacts</MenuItem>
			</ul>
			<div className="w-[150px] h-px bg-main justify-items-center"></div>
			<ul className="gap-x-4 gap-y-1 flex-wrap justify-center flex flex-col md:flex-row text-center">
				<MenuItem href="#">Privacy Policy</MenuItem>
				<MenuItem href="#">Conditions of Use</MenuItem>
			</ul>
		</nav>
	);
};
