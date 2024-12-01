"use client";

import Link from "next/link";
import React from "react";

const CheckoutHeader: React.FC = () => {
  return (
    <header>
      <div className="row topoCheckoutCadastro">
        <div className="small-12 columns">
          <div className="medium-flex-container align-justify align-middle">
            <div className="box-logo-topo">
              <Link href="/">
                <img
                  src="https://www.doearenacorinthians.com.br/bin/tema/doe-arena-corinthians-front-checkout/img/cabecalho/logo.svg"
                  alt="Logo"
                  width="150px"
                />
              </Link>
            </div>
            <div className="dividas-na-compra">
              <span>
                Dúvidas? Entre em contato pelo e-mail{" "}
                <span>sac@doearenacorinthians.com.br</span>
              </span>
            </div>
            <div className="compra-segura-topo">
              <div className="compra-segura-topo-img">
                <img
                  src="https://www.doearenacorinthians.com.br/bin/tema/doe-arena-corinthians-front-checkout/img/cabecalho/cadeado.svg"
                  alt="Cadeado"
                />
              </div>
              <span>Doação 100% segura</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
