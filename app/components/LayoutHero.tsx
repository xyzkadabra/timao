import React from "react";

type HeroSectionProps = {
  // Props podem ser adicionadas aqui se necessário
};

export const HeroSection: React.FC<HeroSectionProps> = (props) => {
  return (
    <div data-v-4dc8683e="" data-v-5dcda68c="" className="layout-hero">
      <a data-v-4dc8683e="" href="#contribua" className="cta-contribute">
        Contribua Já
        <svg
          data-v-4dc8683e=""
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 17.25L11.825 15.2563L16.7063 10.375H0V7.625H16.7063L11.825 2.74375L13.75 0.75L22 9L13.75 17.25Z"
            fill="white"
          ></path>
        </svg>
      </a>
      <img
        data-v-4dc8683e=""
        src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/banner-principal-mobile-BuYtk9Oq.webp"
        alt="Doe arena corinthians"
        width="768"
        height="960"
        className="banner-principal md:hidden"
        loading="eager"
        fetchPriority="high"
      ></img>
      <img
        data-v-4dc8683e=""
        src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/banner-principal-HK4UZaNb.webp"
        alt="Doe arena corinthians"
        width="1920"
        height="700"
        className="banner-principal hidden md:block"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
};
