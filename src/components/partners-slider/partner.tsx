import Image from 'next/image';

export const Partner = ({ imgSrc, name }: { imgSrc: string; name: string }) => {
	return (
		<div className="border border-[#F3F3F3] rounded-md overflow-hidden w-[173] md:w-auto">
			<Image src={imgSrc} alt={name} />
		</div>
	);
};
