'use client';

import clsx from 'clsx';
import { createContext, useContext, useState } from 'react';

type ItemNameType = string | number;

type SpoilerContextType = {
	activeItems: ItemNameType[];
	toggle: (itemName: ItemNameType) => void;
};

type SpoilerItemContextType = {
	itemName: ItemNameType;
	isActive: boolean;
};

const SpoilerContext = createContext<SpoilerContextType | null>(null);
const SpoilerItemContext = createContext<SpoilerItemContextType | null>(null);

const useSpoiler = () => {
	const context = useContext(SpoilerContext);

	if (!context) throw new Error('SpoilerItem must be used inside <Spoiler>');

	return context;
};

const useSpoilerItem = () => {
	const context = useContext(SpoilerItemContext);

	if (!context) throw new Error('SpoilerItem must be used inside <SpoilerItem>');

	return context;
};

export const Spoiler = ({
	active = null,
	children,
	className,
}: {
	active?: ItemNameType | null;
	className?: string;
	children: React.ReactNode;
}) => {
	const [activeItems, setActiveItems] = useState<ItemNameType[]>(active === null ? [] : [active]);

	const toggle = (itemName: ItemNameType) => {
		setActiveItems((prev) => {
			const itemNameIndex = prev.indexOf(itemName);

			return itemNameIndex < 0 ? [...prev, itemName] : prev.filter((item) => item !== itemName);
		});
	};

	return (
		<SpoilerContext value={{ activeItems, toggle }}>
			<div className={className}>{children}</div>
		</SpoilerContext>
	);
};

export const SpoilerItem = ({
	children,
	itemName,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
	itemName: ItemNameType;
}) => {
	const { activeItems } = useSpoiler();

	const isActive = activeItems.includes(itemName);

	return (
		<SpoilerItemContext value={{ isActive, itemName }}>
			<div className={className}>{children}</div>
		</SpoilerItemContext>
	);
};

export const SpoilerButton = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode | ((toggle: () => void, isActive: boolean) => React.ReactNode);
}) => {
	const { toggle } = useSpoiler();
	const { itemName, isActive } = useSpoilerItem();

	if (typeof children === 'function') {
		return children(() => toggle(itemName), isActive);
	}

	return (
		<button className={className} onClick={() => toggle(itemName)} aria-expanded={isActive}>
			{children}
		</button>
	);
};

export const SpoilerContent = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode | ((isActive: boolean) => React.ReactNode);
}) => {
	const { isActive } = useSpoilerItem();

	if (typeof children === 'function') {
		return children(isActive);
	}

	return (
		<div
			className={clsx(
				'grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-in-out',
				isActive && 'grid-rows-[1fr]',
			)}
			aria-hidden={!isActive}
		>
			<div className="min-h-0">
				<div className={className}>{children}</div>
			</div>
		</div>
	);
};
