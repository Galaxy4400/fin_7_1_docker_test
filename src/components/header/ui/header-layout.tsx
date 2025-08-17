import { Container } from '@/shared/ui/container';

export const HeaderLayout = ({
	logo,
	menu,
	actions,
	langSelector,
	menuButton,
	menuMobile,
}: {
	logo: React.ReactNode;
	menu: React.ReactNode;
	actions: React.ReactNode;
	langSelector: React.ReactNode;
	menuButton: React.ReactNode;
	menuMobile: React.ReactNode;
}) => {
	return (
		<>
			<header className="bg-background border-main z-100 border-b py-2.5">
				<Container className="flex items-center justify-between gap-2.5 text-white">
					{logo}
					{menu}
					<div className="flex gap-4">
						<div className="hidden sm:block">{actions}</div>
						<div className="hidden sm:block">{langSelector}</div>
						<div className="md:hidden">{menuButton}</div>
					</div>
				</Container>
			</header>
			{menuMobile}
		</>
	);
};
