import clsx from 'clsx';

export const H3 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return <h2 className={clsx(className, 'text-xl md:text-[32px] font-bold leading-none')}>{children}</h2>;
};
