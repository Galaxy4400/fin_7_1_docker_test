import { PartnersSlider } from '@/components/partners-slider';
import { Container, H2 } from '@/shared/ui';

export const Partners = () => {
	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-8 md:gap-14">
				<H2 className="text-center">They Trust Us</H2>
				<PartnersSlider />
			</Container>
		</div>
	);
};
