import { Container } from '@/shared/ui/container';
import { H2 } from '@/shared/ui/h2';
import { P } from '@/shared/ui/p';

import { MainForm } from '../main-form/main-form';

export const FormBlock1 = () => {
	return (
		<div className="py-20 bg-gradient-main">
			<Container className="grid grid-cols-2 gap-[60px]">
				<div className="text-white grid gap-8 content-center">
					<H2>SIGN UP now</H2>
					<P>Start now and praise yourself tomorrow!</P>
				</div>
				<MainForm />
			</Container>
		</div>
	);
};
