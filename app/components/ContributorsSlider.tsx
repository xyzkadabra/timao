"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Contributor = {
  name: string,
  city: string,
  state: string
};

interface ContributorsSliderProps {
  contributors: Contributor[];
}

const ContributorsSlider: React.FC<ContributorsSliderProps> = ({ contributors }) => {
  return (
    <div data-v-92c90d60="" data-v-5dcda68c="" className="contributed">
      <img data-v-92c90d60="" className="texture06" src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/texture-w-h-_Pt2-Tdg.webp" alt="Textura para efeito 6" aria-hidden="true" />
      <div data-v-92c90d60="" className="contributed__wrapper">
        <p data-v-92c90d60="" className="contributed__see">Veja quem contribuiu</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {contributors.map((contributor, index) => (
            <SwiperSlide key={index}>
              <div data-v-92c90d60="" className="contributed__users">
                <p data-v-92c90d60="">
                  <span data-v-92c90d60="">{contributor.name}</span>,
                  <span data-v-92c90d60=""> {contributor.city}</span>,
                  <span data-v-92c90d60=""> - {contributor.state}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p data-v-92c90d60="" className="contributed__notice">
        A campanha terá duração de <b data-v-92c90d60="">seis meses ou até o momento em que atingirmos a meta.</b>
      </p>
    </div>
  );
};

export default ContributorsSlider;