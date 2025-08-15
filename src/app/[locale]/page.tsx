import { Calculator } from '@/components/main-page/calculator';
import { FormBlock1 } from '@/components/main-page/form-block-1';
import { Head } from '@/components/main-page/head';

export default function HomePage() {
	return (
		<>
			<Head />
			<Calculator />
			<FormBlock1 />
		</>
	);
}
