"use client";

import { useContributionContext } from "../context/ContributionContext";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";
export function Header() {
  const { isDisabled, selectedAmount, isLoading, setIsLoading } = useContributionContext();
  const router = useRouter();
 
  const formatToBRL = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const checkoutLinks = {
    10: process.env.NEXT_PUBLIC_LINK_DOACAO_1 || "",
    20: process.env.NEXT_PUBLIC_LINK_DOACAO_2 || "",
    50: process.env.NEXT_PUBLIC_LINK_DOACAO_3 || "",
    100: process.env.NEXT_PUBLIC_LINK_DOACAO_4 || "",
    500: process.env.NEXT_PUBLIC_LINK_DOACAO_5 || "",
  } as const;

  
  const handleContribute = () => {
    if (isDisabled) {
      const section = document.getElementById("contribua");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (selectedAmount) {
      const checkoutLink = checkoutLinks[selectedAmount as keyof typeof checkoutLinks];
      if (checkoutLink) {
        setIsLoading(true);
        setTimeout(() => {
          window.location.href = checkoutLink;
          setIsLoading(false);
        }, 1000);
      } else {
        console.error("Nenhum link de checkout encontrado para o valor selecionado.");
      }
    }
  };
 
  return (
    <div className="header-wrapper force-fill">
      <nav id="header-principal" className={`column fixed bottom-0 left-0 top-initial md:relative`} style={{ display: `${isDisabled ? "none" : ""}` }}>
        <div className="header-principal__container">
          <ul className="header-principal__menu !hidden md:!flex">
            <li className="highlight-line header-principal__menu__item">
              <a href="https://www.doearenacorinthians.com.br/minha-conta/pedido">
                Minhas doações
              </a>
            </li>
            <li className="header-principal__menu__item">
              <a href="#campanha">A Campanha</a>
            </li>
            <li className="header-principal__menu__item">
              <a href="#motivacoes-para-doar">Motivações</a>
            </li>
            <li className="header-principal__menu__item">
              <a href="#historia">História</a>
            </li>
            <li className="header-principal__menu__item">
              <a href="#embaixadores">Embaixadores</a>
            </li>
            <li className="header-principal__menu__item">
              <a href="#perguntas">Perguntas</a>
            </li>
          </ul>
          <div data-v-f1fd3633 className="contribution-controll">
            <button
              data-v-f1fd3633
              aria-label="Fazer minha contribuição"
              className={`contribution-controll__cta cta-contribute  ${
                isDisabled ? "disabled" : ""
              }`}
              onClick={handleContribute}
            >
              {isLoading ? <Loader /> : <span> Fazer contribuição</span>}{" "}
            </button>
            <div
              data-v-f1fd3633
              className="contribution-controll__back-value"
              style={{ display: `${isDisabled ? "none" : "block"}` }}
            >
              <a
                data-v-f1fd3633
                href="#contribua"
                aria-label="Voltar ao topo do site"
              >
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block md:hidden"
                >
                  <path
                    d="M0.329101 7.74756L8 0.0766602L15.6709 7.74756L14.3093 9.10914L8 2.79983L1.69069 9.10914L0.329101 7.74756Z"
                    fill="white"
                  />
                </svg>
                {formatToBRL(selectedAmount || 0)}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
