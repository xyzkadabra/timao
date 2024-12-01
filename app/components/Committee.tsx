// Committee.tsx
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

interface CommitteeMember {
    imageUrl: string;
    name: string;
    roleDescription: string;
}

const committeeMembers: CommitteeMember[] = [
    {
        name: "Alexandre Max",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Alexandre%20Max-N99XkB61.webp",
        roleDescription: "Membro independente",
    },
    {
        name: "Edson Oliveira",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Edson%20Oliveira-DbkaYYNt.webp",
        roleDescription: "Representante Gaviões da Fiel",
    },
    {
        name: "Evandro Monteiro",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Evandro%20Monteiro-C8RFWunj.webp",
        roleDescription: "Membro independente",
    },
    {
        name: "Fabricio José Parras Vicentim",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Fabricio%20Jose-CFsWgxhJ.webp",
        roleDescription: "Representante Conselho Corinthians",
    },
    {
        name: "Maristela Seiler",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Maristela%20Seiler-lo6M7H4e.webp",
        roleDescription: "Membro independente",
    },
    {
        name: "Pedro Silveira",
        imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Pedro%20Silveira-CbcHeSfo.webp",
        roleDescription: "Representante Diretoria Corinthians",
    },
   
];

export  function Committee() {
    return (
        <div data-v-ea732700="" data-v-5dcda68c="" className="committe">
            <img
                data-v-ea732700=""
                className="texture10"
                src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/texture-w-h-_Pt2-Tdg.webp"
                alt="Textura para efeito 10"
                aria-hidden="true"
            />
            <h2 data-v-ea732700="" className="committe__title">Comitê Fiscal</h2>
            <p data-v-ea732700="" className="committe__sub-title">Confira quem são os responsáveis por acompanhar e fiscalizar a campanha.</p>
            <div data-v-ea732700="" className="committe__items">
                <Swiper
                    className="swiper swiper-initialized swiper-horizontal primary swiper-backface-hidden"
                    modules={[Navigation, Pagination]}
                   
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={3}
        spaceBetween={160}
          breakpoints={{
            // when window width is >= 640px
            640: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            // when window width is >= 1024px
            1024: {
              spaceBetween: 10,
              slidesPerView: 6,
            },
          }}
                >
                    {committeeMembers.map((member, index) => (
                        <SwiperSlide key={index} data-v-ea732700>
                            <div data-v-ea732700 data-v-ca96fcae className="card committe__card">
                                <div data-v-ca96fcae className="card__img">
                                    <img
                                    data-v-ca96fcae
                                        src={member.imageUrl}
                                        alt={member.name}
                                        width="185"
                                        height="185"
                                        loading="lazy"
                                    />
                                </div>
                                <p data-v-ca96fcae className="card__title">{member.name}</p>
                                <p data-v-ca96fcae className="card__description">{member.roleDescription}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}