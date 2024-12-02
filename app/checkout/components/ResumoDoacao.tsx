"use client";
import { useContributionContext } from '@/app/context/ContributionContext';
import React from 'react';

const ResumoDoacao: React.FC = () => {
    const { selectedAmount} = useContributionContext();

    const formatToBRL = (value: number): string => {
        return value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
      };
  return (
    <div className="max-h-[250px] box-resumo-pedido mainBox-resumo">
      <div className="mainBox-resumo-t1">
        <h3>Resumo da doação</h3>
      </div>
      <div className="mainBox-resumo-produtos">
        <div className="produtos">
          <div className="mainBox-resumo-produtos-item">
            <div className="mainBox-resumo-produtos-item-img">
              <img src="https://www.doearenacorinthians.com.br/upload/produto/imagem/m_doe-arena-corinthians-1.png" alt="Doe Arena Corinthians" />
            </div>
            <div className="mainBox-resumo-produtos-item-info">
              <span className="mainBox-resumo-produtos-item-info-nome">
                Doe Arena Corinthians
              </span>
              <div className="mainBox-resumo-produtos-item-info-precos">
                <span className="mainBox-resumo-produtos-item-info-preco">{formatToBRL(selectedAmount || 0)}</span>
              </div>
              <span className="d-block mainBox-resumo-produtos-item-quantidade">Quantidade: 1</span>
              <div className="mainBox-resumo-produtos-item-info-precos">
                <span className="mainBox-resumo-produtos-item-info-preco">{formatToBRL(selectedAmount || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBox-resumo-valores boxResumoTotalizacao">
        <span>{formatToBRL(selectedAmount || 0)}</span>
      </div>
    </div>
  );
};

export default ResumoDoacao;
