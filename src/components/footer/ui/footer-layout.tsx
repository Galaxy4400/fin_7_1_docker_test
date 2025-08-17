import { Container } from '@/shared/ui/container';

export const FooterLayout = ({
	logo,
	menu,
	socials,
}: {
	logo: React.ReactNode;
	menu: React.ReactNode;
	socials: React.ReactNode;
}) => {
	return (
		<footer className="bg-background border-main border-t py-12">
			<Container className="grid gap-6">
				<div className="flex flex-col items-center gap-8 md:flex-row">
					<div className="grid gap-6">
						{logo}
						<div className="hidden gap-9 md:flex">{socials}</div>
					</div>
					<div className="flex grow items-center justify-center">{menu}</div>
				</div>
				<div className="flex justify-center gap-9 md:hidden">{socials}</div>
				<div className="text-gray text-sm">
					Risk Disclosure: Blue Orion is an advanced technological platform that facilitates connections
					between traders and licensed brokers for trading cryptocurrencies, currency pairs, Contracts for
					Difference (CFDs), stocks, and other financial instruments. All forms of trading and investment
					carry potential financial risks. Make informed decisions basedon thorough market analysis and your
					own financial capabilities. Our system automatically matches brokers from our partner network based
					on established algorithms. We strongly recommend that you independently verify the licensing and
					reputation of your selected broker before commencing any business relationship.
				</div>
			</Container>
		</footer>
	);
};
