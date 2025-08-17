'use client';

import { useState } from 'react';

import { useGeo } from '@/providers/geo-provider';
import { numFormat } from '@/shared/lib/num-format';
import { Container, H2, Input } from '@/shared/ui';

const RATE = 0.05;

export const Calculator = () => {
	const [amount, setAmount] = useState(250);
	const [days, setDays] = useState(50);
	const { data, convertToLocalCurrency } = useGeo();

	const calculateCompoundInterest = () => {
		const calculatedValue = amount * Math.pow(1 + RATE, days);

		const inLocalCurrency = convertToLocalCurrency(calculatedValue);

		return `${numFormat(inLocalCurrency)} ${data.localCurrencySymbol}`;
	};

	return (
		<div className="py-12 md:py-20">
			<Container className="grid gap-3 md:gap-12" size="sm">
				<H2 className="text-center">See Your Potential Earnings in 30 Seconds!</H2>
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
					<div>
						<div className="relative">
							<Input
								className="mb-4 pr-14 font-bold"
								value={amount}
								type="number"
								variant="special"
								onChange={(e) => setAmount(Number(e.target.value))}
							/>
							<span className="text-main absolute top-1/2 right-2 -translate-1/2 text-2xl font-bold">
								{data.localCurrencySymbol}
							</span>
						</div>
						<div className="text-base leading-[140%] md:text-xl">Select the period to grow</div>
						<div className="text-base leading-[130%] font-medium md:text-xl">{days} days</div>
						<input
							id="range"
							type="range"
							value={days}
							min="1"
							max="100"
							onChange={(e) => setDays(Number(e.target.value))}
						></input>
					</div>
					<div
						className="bg-gradient-main grid content-center gap-3 rounded-[10px] p-3 text-center text-white
							md:gap-6 md:rounded-[20px] md:p-6"
					>
						<div className="text-base leading-[140%] md:text-xl">Your potential future balance</div>
						<div className="font-special text-[32px] leading-none md:text-[46px]">
							{calculateCompoundInterest()}
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
