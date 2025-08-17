import { Container, H2, P } from '@/shared/ui';

export const Advantages = () => {
	return (
		<div className="py-12 md:py-20 relative overflow-hidden">
			<div
				className="absolute left-[-285px] top-[-130px] w-[445px] h-[257px] rounded-[445px] bg-main
					blur-[100px] -rotate-19"
			/>
			<Container className="grid gap-8 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				<div className="grid gap-2 md:gap-4 text-center">
					<H2>65+</H2>
					<P>Available Currencies</P>
				</div>
				<div className="grid gap-2 md:gap-4 text-center">
					<H2>34М</H2>
					<P>Verified Users</P>
				</div>
				<div className="grid gap-2 md:gap-4 text-center">
					<H2>$400M</H2>
					<P>Trading Volume</P>
				</div>
				<div className="grid gap-2 md:gap-4 text-center">
					<H2>98+</H2>
					<P>Supported Countries</P>
				</div>
			</Container>
		</div>
	);
};
