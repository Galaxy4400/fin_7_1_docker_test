import { Container } from '@/shared/ui/container';
import { H2 } from '@/shared/ui/h2';
import { P } from '@/shared/ui/p';

import { MainForm } from '../main-form/main-form';

export const FormBlock1 = () => {
	return (
		<div className="py-12 md:py-20 bg-gradient-main">
			<Container className="grid md:grid-cols-2 grid-cols-1 gap-x-[60px] gap-y-6">
				<div className="text-white text-center md:text-left grid md:gap-8 gap-4 content-center">
					<H2>SIGN UP now</H2>
					<P>Start now and praise yourself tomorrow!</P>
				</div>
				<MainForm formId="m1" />
			</Container>
		</div>
	);
};
