'use client';

import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { PARTNERS } from '@/shared/constants';

import { Partner } from './partner';

export const PartnersSlider = () => {
	return (
		<>
			<div className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-4">
				{PARTNERS.map((partner) => (
					<Partner imgSrc={partner.src} name={partner.name} key={partner.name} />
				))}
			</div>

			<div className="min-w-0 md:hidden">
				<Swiper spaceBetween={16} slidesPerView={'auto'} loop={true}>
					{PARTNERS.map((partner) => (
						<SwiperSlide key={partner.name} className="!w-auto">
							<Partner imgSrc={partner.src} name={partner.name} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};
