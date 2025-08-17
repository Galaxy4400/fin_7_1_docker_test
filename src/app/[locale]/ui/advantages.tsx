import { Container, H2, P } from '@/shared/ui';

export const Advantages = () => {
	return (
		<div className="relative overflow-hidden py-12 md:py-20">
			<div
				className="bg-main absolute top-[-130px] left-[-285px] h-[257px] w-[445px] -rotate-19 rounded-[445px]
					blur-[100px]"
			/>
			<Container className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
				<div className="grid gap-2 text-center md:gap-4">
					<H2>65+</H2>
					<P>Available Currencies</P>
				</div>
				<div className="grid gap-2 text-center md:gap-4">
					<H2>34М</H2>
					<P>Verified Users</P>
				</div>
				<div className="grid gap-2 text-center md:gap-4">
					<H2>$400M</H2>
					<P>Trading Volume</P>
				</div>
				<div className="grid gap-2 text-center md:gap-4">
					<H2>98+</H2>
					<P>Supported Countries</P>
				</div>
			</Container>
		</div>
	);
};
