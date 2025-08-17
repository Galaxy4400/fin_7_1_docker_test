import clsx from 'clsx';

export const H3 = ({ className, children }: { children?: React.ReactNode; className?: string }) => {
	return <h3 className={clsx(className, 'text-xl leading-none font-bold md:text-[32px]')}>{children}</h3>;
};
