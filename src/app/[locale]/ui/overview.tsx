import Image from 'next/image';

import overviewSrc1 from '@/shared/images/overview-1.png';
import overviewSrc2 from '@/shared/images/overview-2.png';
import { Container, H2, P, StarIcon } from '@/shared/ui';
import { H3 } from '@/shared/ui/h3';

export const Overview = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-6 md:gap-12" size="sm">
				<div className="grid gap-4 md:gap-8">
					<H2 className="md:text-center">Platform Overview</H2>
					<P>
						{`Reliable crypto trading platform for beginners and experienced traders. Easy registration, transparent terms, professional support. Intuitive interface, comprehensive tools, robust security, educational resources for successful cryptocurrency investment and trading activities worldwide.`}
					</P>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
					<div className="grid grid-cols-[auto_1fr] gap-3 md:gap-6 content-start">
						<div className="bg-background outline-hidden rounded-lg">
							<Image className="w-[80px] md:w-[132px]" src={overviewSrc1} alt="overview-1" />
						</div>
						<div className="grid content-center gap-1.5 md:gap-3">
							<H3>Currency</H3>
							<P>US Dollar</P>
						</div>
					</div>
					<div className="grid grid-cols-[auto_1fr] gap-3 md:gap-6">
						<div className="bg-background outline-hidden rounded-lg">
							<Image className="w-[80px] md:w-[132px]" src={overviewSrc2} alt="overview-2" />
						</div>
						<div className="grid content-center gap-1.5 md:gap-3">
							<H3>User Rating</H3>
							<div className="flex gap-1 md:gap-2">
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
