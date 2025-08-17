import { MainForm } from '@/components/main-form';
import { Container, H2, P } from '@/shared/ui';

export const FormBlock3 = () => {
	return (
		<div className="bg-gradient-main py-12 md:py-20">
			<Container className="grid grid-cols-1 gap-x-[60px] gap-y-6 md:grid-cols-2">
				<div className="grid content-center gap-4 text-center text-white md:gap-8 md:text-left">
					<H2>SIGN UP now</H2>
					<P>Start now and praise yourself tomorrow!</P>
				</div>
				<MainForm formId="m3" />
			</Container>
		</div>
	);
};
