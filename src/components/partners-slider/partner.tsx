import Image from 'next/image';

export const Partner = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
	return (
		<div className="w-[173] overflow-hidden rounded-md border border-[#F3F3F3] md:w-auto">
			<Image src={imgSrc} alt={name} />
		</div>
	);
};
