"use client";
import React from 'react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type MotivationsSectionProps = {};

export const MotivationsSection: React.FC<MotivationsSectionProps> = (props) => {
    return (
        <section data-v-00f8d80f="" data-v-5dcda68c="" className="motivations row" id="motivacoes-para-doar">
            <img data-v-00f8d80f="" className="texture05" 
                 src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/texture-w-h-_Pt2-Tdg.webp" 
                 alt="Textura para efeito 5" 
                 aria-hidden="true" />
            <h2 data-v-00f8d80f="">Motivações para Doar</h2>
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
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
                <SwiperSlide>
                    <div data-v-00f8d80f="" className="motivations__container__item">
                        <h3 data-v-00f8d80f="">1. Orgulho e Identidade Corinthiana</h3>
                        <p data-v-00f8d80f="">A Arena Corinthians é um ícone de orgulho para o clube e seus torcedores. 
                        Quitar o estádio é tão significativo quanto sonhar em nossa própria casa. Simboliza a total posse do clube.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-v-00f8d80f="" className="motivations__container__item">
                        <h3 data-v-00f8d80f="">2. Liberdade Financeira</h3>
                        <p data-v-00f8d80f="">A eliminação da dívida da Arena Corinthians liberaria significativamente a saúde financeira do clube, permitindo maior investimento em outras áreas, como infraestrutura e reforços.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div data-v-00f8d80f="" className="motivations__container__item">
                        <h3 data-v-00f8d80f="">3. Mobilização da Torcida</h3>
                        <p data-v-00f8d80f="">A quitação da Arena é um desejo comum entre os torcedores, que demonstraram grande interesse em participar desse processo através de uma pesquisa com 96% de aprovação.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};