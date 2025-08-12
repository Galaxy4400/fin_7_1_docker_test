import { Soc1 } from './icons/soc-1';
import { Soc2 } from './icons/soc-2';
import { Soc3 } from './icons/soc-3';

export const Social = ({ icon }: { icon: 1 | 2 | 3 }) => {
	const Icon = {
		[1]: Soc1,
		[2]: Soc2,
		[3]: Soc3,
	}[icon];

	return (
		<div className="w-11 h-11 inline-flex justify-center items-center text-white bg-gradient-main rounded-md">
			<Icon />
		</div>
	);
};
