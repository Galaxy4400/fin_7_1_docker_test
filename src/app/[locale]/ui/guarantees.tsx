import Image from 'next/image';

import guaranteesSrc1 from '@/shared/images/garantee1.png';
import guaranteesSrc2 from '@/shared/images/garantee2.png';
import guaranteesSrc3 from '@/shared/images/garantee3.png';
import { Container, H2, H3, ListItemMark, P } from '@/shared/ui';

export const Guarantees = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-6 md:gap-12" size="sm">
				<div className="grid gap-4 md:gap-8 md:text-center">
					<H2>Our guarantees</H2>
					<P>
						{`Blue Orion combines bank-grade security with intuitive AI trading – making crypto profits accessible
					without compromising safety. We deliver no-hidden-fee transparency and beginner-friendly tools –
					because smart investing shouldn't require a finance degree.`}
					</P>
				</div>
				<div className="grid gap-8 md:gap-14">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
						<div className="grid content-start gap-3 md:gap-6">
							<H3>{`Your funds' security`}</H3>
							<ul className="grid gap-1 md:gap-2">
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>Cold storage of 95% funds</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>2FA & SSL encryption</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>Compliant with (country) finance rules</P>
								</li>
							</ul>
						</div>
						<Image src={guaranteesSrc1} alt="guarantees-1" />
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
						<div className="grid content-start gap-3 md:order-2 md:gap-6">
							<H3 className="">{`Simplicity built in`}</H3>
							<ul className="grid gap-1 md:gap-2">
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>3-click trading - faster than traditional platforms</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>Automated trading with AI-Assistant</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>User-friendly interface for all users</P>
								</li>
							</ul>
						</div>
						<Image className="md:order-1" src={guaranteesSrc2} alt="guarantees-2" />
					</div>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
						<div className="grid content-start gap-3 md:gap-6">
							<H3>{`Transparency at every step`}</H3>
							<ul className="grid gap-1 md:gap-2">
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>Transparent pricing from the start</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>0 hidden fees</P>
								</li>
								<li className="relative pl-4 md:pl-[22]">
									<ListItemMark className="absolute top-1/2 left-0 -translate-y-1/2" />
									<P>Live reserve audits</P>
								</li>
							</ul>
						</div>
						<Image src={guaranteesSrc3} alt="guarantees-3" />
					</div>
				</div>
			</Container>
		</div>
	);
};
