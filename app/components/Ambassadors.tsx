"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

interface Ambassador {
  name: string;
  imageUrl: string;
  instagramHandle: string;
}

const ambassadors: Ambassador[] = [
  {
    name: "Alessandra Negrini",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Alessandra%20Negrini-DPFkII5T.webp",
    instagramHandle: "@alessandranegrini",
  },
  {
    name: "Alfinete",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Alfinete-RiqQfcyr.webp",
    instagramHandle: "@alfinetetv",
  },
  {
    name: "Badauí",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Badaui-Du7xQRxF.webp",
    instagramHandle: "@fbadaui",
  },
  {
    name: "Basílio",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Basilio-DaiqtTsv.webp",
    instagramHandle: "@basiliopedeanjo",
  },
  {
    name: "Benjamin Back",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Benjamin%20Back-DhR3lqgL.webp",
    instagramHandle: "@benjaminbackoficial",
  },
  {
    name: "Craque Neto",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Craque%20Neto-CsGSU3Hm.webp",
    instagramHandle: "@10neto",
  },

  {
    name: "Fernanda De Freitas",
    imageUrl:
      "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Fernanda%20de%20Freitas-CWNYm2QW.webp",
    instagramHandle: "@fernandadefreitas_",
  },
  {
    name: "Marcelinho Carioca",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Marcelinho%20Carioca-BKBZNVWE.webp",
    instagramHandle: "@marcelinhocariocaoficial",
  },
  {
    name: "Mc Hariel",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Mc%20Hariel-B_hshM_g.webp",
    instagramHandle: "@mchariel",
  },
  {
    name: "Rappin' Hood",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Rappin%20Hood-DRWf6YgT.webp",
    instagramHandle: "@rappinhoodoficial",
  },
  {
    name: "Rodrigo Mato Seco",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Rodrigo%20Mato%20Seco-gHr7DyOq.webp",
    instagramHandle: "@rodrigomatoseco",
  },
  {
    name: "Romero",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Romero-CJy8bfgp.webp",
    instagramHandle: "@romeroteam",
  },
  {
    name: "Sabrina Sato",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Sabrina%20Sato-Cz8RmM4z.webp",
    instagramHandle: "@sabrinasato",
  },
  {
    name: "Tamires",
    imageUrl: "https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/Tamires-BXF9p8sT.webp",
    instagramHandle: "@tamires",
  },
];

export function Ambassadors() {
  return (
    <div
      data-v-5dcda68c=""
      data-v-91ff95cc=""
      className="ambassadors"
      id="embaixadores"
    >
      <h2 data-v-91ff95cc="" className="ambassadors__title">
        EMBAIXADORES DA CAMPANHA
      </h2>
      <p data-v-91ff95cc="" className="ambassadors__sub-title">
        Confira quem são os porta-vozes da nossa campanha.
      </p>
      <div data-v-91ff95cc="" className="swiper-wrapper">
        <Swiper
          data-v-91ff95cc=""
          className="swiper swiper-initialized swiper-horizontal primary"
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
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
          {ambassadors.map((ambassador, index) => (
            <SwiperSlide
              data-v-91ff95cc=""
              className="swiper-slide"
              key={index}
              role="group"
              aria-label={`${index + 1} / ${ambassadors.length}`}
              style={{ marginRight: "19px" }}
            >
              <div data-v-ca96fcae="" data-v-91ff95cc="" className="card">
                <div data-v-ca96fcae="" className="card__img">
                  <img
                    data-v-ca96fcae=""
                    src={ambassador.imageUrl}
                    width="185"
                    height="185"
                    alt={ambassador.name}
                    loading="lazy"
                  />
                </div>
                <p data-v-ca96fcae="" className="card__title">
                  {ambassador.name}
                </p>
                <p data-v-ca96fcae="" className="card__insta">
                  {ambassador.instagramHandle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          data-v-91ff95cc=""
          className="swiper-button-prev"
          role="button"
          aria-label="Previous slide"
        >
      

          <svg
          style={{transform: "rotate(180deg)"}}
            data-v-91ff95cc=""
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.41359 0.986694L12.4136 10.9867L2.41359 20.9867L0.63858 19.2117L8.86359 10.9867L0.638579 2.7617L2.41359 0.986694Z"
              fill="#EDC884"
            ></path>
          </svg>
        </div>
        <div
          data-v-91ff95cc=""
          className="swiper-button-next"
          role="button"
          aria-label="Next slide"
        >
              <svg
            data-v-91ff95cc=""
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5864 20.0133L0.586426 10.0133L10.5864 0.0133057L12.3614 1.78831L4.13643 10.0133L12.3614 18.2383L10.5864 20.0133Z"
              fill="#EDC884"
            ></path>
          </svg>
        
        </div>
      </div>
    </div>
  );
}
