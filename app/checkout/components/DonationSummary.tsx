"use client";
import { useContributionContext } from "@/app/context/ContributionContext";
import React, { useState, useEffect } from "react";

const formatPrice = (price: number) => {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const DonationSummary: React.FC = () => {
  const { selectedAmount } = useContributionContext();
  const [donationDetails, setDonationDetails] = useState({
    name: "******",
    imageUrl:
      "https://www.doearenacorinthians.com.br/upload/produto/imagem/m_doe-arena-corinthians-1.png",
    price: formatPrice(selectedAmount!),
    quantity: 1,
    total: formatPrice(selectedAmount! * 1),
  });

  useEffect(() => {
    const storedName = localStorage.getItem("donationName");
    const storedImageUrl = localStorage.getItem("donationImageUrl");
    const storedPrice = localStorage.getItem("donationPrice");
    const storedQuantity = localStorage.getItem("donationQuantity");
    const storedTotal = localStorage.getItem("donationTotal");

    if (storedName)
      setDonationDetails((prevState) => ({ ...prevState, name: storedName }));
    if (storedImageUrl)
      setDonationDetails((prevState) => ({
        ...prevState,
        imageUrl: storedImageUrl,
      }));
    if (storedPrice)
      setDonationDetails((prevState) => ({ ...prevState, price: storedPrice }));
    if (storedQuantity)
      setDonationDetails((prevState) => ({
        ...prevState,
        quantity: parseInt(storedQuantity),
      }));
    if (storedTotal)
      setDonationDetails((prevState) => ({ ...prevState, total: storedTotal }));
  }, []);

  return (
    <div className="small-12 medium-6 large-4 columns">
      <div className="boxCheckout">
        <div className="boxCheckout-topo">
          <span>Resumo da doação</span>
        </div>

        <div className="produtoResumo">
          <div className="row collapse">
            <div className="small-12 columns produtoResumo-left flex-container align-middle visible">
              <div className="produtoResumo-imagem visible">
                <img
                  src={
                    "https://www.doearenacorinthians.com.br/upload/produto/imagem/m_doe-arena-corinthians-1.png"
                  }
                  alt={donationDetails.name}
                  title={donationDetails.name}
                  width="100"
                  height="100"
                />
              </div>

              <div className="produtoResumo-nome">
                <p className="produtoResumo-nome-text">
                  {donationDetails.name}
                </p>
                <div className="produtoResumo-precos">
                  <span className="produtoResumo-precos-preco">
                    {donationDetails.price}
                  </span>
                </div>
                <div className="produtoResumo-boxFlex">
                  <span>
                    <span>Quantidade:</span> {donationDetails.quantity}
                  </span>
                  <span>
                    <b>{donationDetails.price}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="boxResumoTotalizacao">
          <div className="totalResumo">
            <div className="totalResumo-item">
              <span className="totalResumo-textLeft">Total dos itens</span>
              <span className="totalResumo-bold">{donationDetails.total}</span>
            </div>
          </div>

          <div className="totalResumo-item totalResumo-valorFinal">
            <span className="totalResumo-textLeft">Total da doação</span>
            <span className="totalResumo-boldBig">{donationDetails.total}</span>
          </div>
        </div>
      </div>

      <a href="https://www.doearenacorinthians.com.br/minha-conta/pedido/968949/detalhe">
        <button className="botao-doacao" type="button">
          Acompanhe sua doação aqui
        </button>
      </a>
    </div>
  );
};

export default DonationSummary;
