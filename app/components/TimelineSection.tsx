"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TimelineSectionProps = {};

const events = [
  {
    year: "1954 e 1977",
    subtitle: "TORCIDA CRESCE NO PERÍODO DE 23 ANOS SEM TÍTULOS",
    description:
      "Entre o período de 1954 e 1977, o Corinthians passou 23 anos sem conquistar nenhum título expressivo. Apesar disso, a torcida não parou de crescer, ganhou força e a fama da torcida mais apaixonada do Brasil.",
  },
  {
    year: "1976",
    subtitle: "1ª INVASÃO CORINTHIANA NO RJ",
    description:
      "Em 1976, a Fiel Torcida realizou o maior deslocamento de torcedores que o mundo já presenciou. Do total de 146 mil pessoas que assistiram à partida entre Corinthians x Fluminense pela semifinal do Campeonato Brasileiro, estima-se que metade do público era dos torcedores corinthianos que viajaram em caravanas para acompanhar o jogo.",
  },
  {
    year: "1977",
    subtitle: "MAIOR PÚBLICO NO MORUMBI",
    description:
      "A Fiel Torcida deixou uma marca insubstituível no estádio do rival São Paulo ao colocar 146.082 torcedores na segunda partida da disputa do Campeonato Paulista de 1977.",
  },
  {
    year: "2000",
    subtitle: "2ª INVASÃO CORINTHIANA NO RJ",
    description:
      "Em 2000, a Fiel Torcida realizou mais uma invasão no Rio de Janeiro ao mobilizar mais de 30 mil corinthianos para a final do Mundial de Clubes da FIFA contra o Vasco.",
  },
  {
    year: "2012",
    subtitle: "INVASÃO NO JAPÃO",
    description:
      "Em 2012, o bando de loucos fez história em outro continente. Mais de 40 mil corinthianos desembarcaram no Japão para acompanhar o Corinthians no Mundial de Clubes.",
  },
  {
    year: "2024",
    subtitle: "MAIORES PÚBLICOS DO FUTEBOL FEMININO NO PAÍS",
    description:
      "Com a presença da Fiel Torcida nas arquibancadas, o Corinthians é dono dos quatro maiores públicos do futebol feminino no Brasil. Na final do Campeonato Brasileiro de 2024, mais de 44 mil pessoas acompanharam na Arena a vitória e o título do Corinthians contra o São Paulo.",
  },
];

export const TimelineSection: React.FC<TimelineSectionProps> = () => {
  return (
    <section
      data-v-7e756120=""
      data-v-5dcda68c=""
      className="timeline"
      id="historia"
    >
      <img
        data-v-7e756120=""
        className="texture09"
        src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/texture-w-h-_Pt2-Tdg.webp"
        alt="Textura para efeito 9"
        aria-hidden="true"
      ></img>
      <h2 data-v-7e756120="" className="timeline__title">
        NADA É IMPOSSÍVEL PARA A FIEL TORCIDA!
      </h2>
      <p data-v-7e756120="" className="timeline__description">
        Durante os 114 anos do Corinthians, fomos protagonistas em diversas
        ocasiões e temos certeza de que agora não será diferente.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        
    
    
        navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
        className="swiper-wrapper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index} data-v-7e756120 className="timeline__slider">
            <div data-v-7e756120 className="timeline__slider__item">
              <p data-v-7e756120 className="timeline__slider__item__title">
                {event.year}
              </p>
              <p data-v-7e756120 className="timeline__slider__item__sub-title">
                {event.subtitle}
              </p>
              <p data-v-7e756120 className="timeline__slider__item__desc">
                {event.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        data-v-7e756120=""
        className="swiper-button-prev swiper-button-disabled"
        tabIndex={-1}
        role="button"
        aria-label="Previous slide"
        aria-controls="swiper-wrapper-76f10c81011310e2573"
        aria-disabled="true"
      >

      </div>

      <div
        data-v-7e756120=""
        className="swiper-button-next"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
        aria-controls="swiper-wrapper-76f10c81011310e2573"
        aria-disabled="false"
      >
      
      </div>
    </section>
  );
};
