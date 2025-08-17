import {
	Advantages,
	Calculator,
	Faq,
	FormBlock1,
	FormBlock2,
	FormBlock3,
	Guarantees,
	Head,
	Overview,
	Partners,
	Steps,
} from './ui';

export default function HomePage() {
	return (
		<>
			<Head />
			<Calculator />
			<FormBlock1 />
			<Partners />
			<Guarantees />
			<FormBlock2 />
			<Advantages />
			<Overview />
			<Steps />
			<Faq />
			<FormBlock3 />
		</>
	);
}
