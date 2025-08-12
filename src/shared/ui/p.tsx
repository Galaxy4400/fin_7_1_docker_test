import clsx from 'clsx';

export const P = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return <p className={clsx(className, 'text-base leading-[130%] md:text-xl')}>{children}</p>;
};
