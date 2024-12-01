"use client";
import React from "react";
import { useContributionContext } from "../context/ContributionContext";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";

const contributions = [10, 20, 50, 100];

export const ContributionSection: React.FC = () => {
  const {
    selectedAmount,
    setSelectedAmount,
    isDisabled,
    setIsDisabled,
    isLoading,
    setIsLoading,
  } = useContributionContext();
  const router = useRouter(); // Usamos o useRouter para redirecionamento

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setIsDisabled(false); // Habilita o botão principal
  };

  const handleContribute = () => {
    if (isDisabled) {
      // Caso o botão esteja desabilitado, redireciona para a seção "contribua"
      const section = document.getElementById("contribua");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Rolagem suave para a seção
      }
    } else if (selectedAmount) {
      // Se não estiver desabilitado, e se houver um valor selecionado, ativa o loading e redireciona para o checkout
      setIsLoading(true); // Ativa o loading
      setTimeout(() => {
        // Redireciona para a página de checkout
        router.push("/checkout/acesso");
        setIsLoading(false); // Ativa o loading
      }, 1000); // Delay de 1 segundo para simular o carregamento
    }

  };
  

  return (
    <section
      data-v-b69e10aa=""
      data-v-5dcda68c=""
      className="contribution"
      id="contribua"
    >
      <h2 data-v-b69e10aa="" className="contribution__title">
        FAÇA PARTE DESSA MISSÃO!
      </h2>
      <p data-v-b69e10aa="" className="contribution__desc">
        Cada doação fará a diferença para chegarmos ao objetivo final desta
        campanha! <br data-v-b69e10aa="" />
        Defina o valor da sua contribuição e venha fazer parte dessa jornada
        histórica ao lado da Fiel Torcida.
      </p>

      <div data-v-b69e10aa="" className="contribution__options">
        {contributions.map((amount, index) => (
          <div
            key={index}
            data-v-b69e10aa=""
            className={`group item-wrapper-selection ${
              selectedAmount === amount ? "selected" : ""
            }`}
          >
            <div data-v-b69e10aa="" className="item-wrapper-selection__top">
              {selectedAmount === amount ? (
                <>
                  <svg
                    data-v-b69e10aa=""
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.74053 17.5765L4.04053 11.8765L5.46553 10.4515L9.74053 14.7265L18.9155 5.55151L20.3405 6.97651L9.74053 17.5765Z"
                      fill="white"
                    ></path>
                  </svg>
                  <span data-v-b69e10aa="" className="block">
                    Escolhido
                  </span>
                </>
              ) : (
                <span data-v-b69e10aa="" className="hidden group-hover:block">
                  Escolher
                </span>
              )}
            </div>
            <button
              onClick={() => handleSelectAmount(amount)}
              data-v-b69e10aa=""
              className="contribution__options__item"
            >
              <p
                data-v-b69e10aa=""
                className="contribution__options__item__title"
              >
                Quero contribuir com
              </p>
              <p
                data-v-b69e10aa=""
                className="contribution__options__item__price-item"
              >
                R$ {amount.toFixed(2)}
              </p>
            </button>
          </div>
        ))}
      </div>

      <button
        data-v-b69e10aa=""
        aria-label="Fazer minha contribuição"
        className={`contribution__cta cta-contribute ${
          isDisabled ? "disabled" : ""
        }`}
        onClick={handleContribute}
      >
        {isLoading ? <Loader /> : <span> Fazer contribuição</span>}
      </button>

      <p data-v-b69e10aa="" className="contribution__terms">
        Ao prosseguir, você concorda com nossos{" "}
        <button data-v-b69e10aa="" className="contribution__terms__button">
          Termos de Uso.
        </button>
      </p>

      <div data-v-34176bca="" data-v-b69e10aa="" className="terms-sheet">
        <div
          data-v-34176bca=""
          className="terms-sheet__foreground"
          style={{ display: "none" }}
        ></div>
        <div
          data-v-34176bca=""
          className="terms-sheet__wrapper"
          style={{ display: "none" }}
        >
          {/* Term content component pode ser extraído aqui como um componente separado, se necessário */}
        </div>
      </div>
    </section>
  );
};
