import React from 'react';

const Doacao: React.FC = () => {
  return (
    <div className="max-w-[400px] max-h-[200px] w-full mainBox pagamento boxInativo">
      <div className="t1 identificacao-t1">
        <h3>2. Doação</h3>
      </div>
      <div className="mainBox-conteudo">
        <div className="mainBox-conteudo-t2 text-center checkoutMenuPagamento checkoutTopoMenuPagamento">
          Faça sua doação
        </div>

        <div className="mainBox-conteudo-formasPag checkoutMenuPagamento">
          <div className="mainBox-conteudo-formasPag-opcao checkoutMenuPagamentoItem" data-menupag="painel1" data-tipo-pag="pix" data-tipo-valor="vista">
            <div className="mainBox-conteudo-formasPag-opcao-img iconPix">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                <g className="iconePagamentoCheckout" transform="translate(-0.521 -0.519)">
                  {/* Icone Pix */}
                  <path d="..." />
                </g>
              </svg>
            </div>
            <div className="checkoutMenuPagamentoItemLabel">
              <span>Doação com Pix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doacao;
