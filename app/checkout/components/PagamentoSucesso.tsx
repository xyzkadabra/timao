import React, { useState, useEffect } from 'react';

const PagamentoSucesso: React.FC = () => {
  const [donationNumber, setDonationNumber] = useState<string>('');

  // Função para gerar um número aleatório para a doação
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000000); // Número aleatório de 6 dígitos
  };

  // Usamos useEffect para gerar o número ao montar o componente
  useEffect(() => {
    setDonationNumber(generateRandomNumber().toString());
  }, []);

  return (
    <div className="row align-center">
      <div className="small-12 columns">
        <div className="pagamentoSucesso">
          <div className="pagamentoSucesso dadosPagamento">
            <div className="pagamentoSucesso-container">
              <div className="pagamentoSucesso-boxNumero visualizarPedido">
                <span className="pagamentoSucesso-numeroTexto">Número da doação</span>
                <span id="idPedido" data-id={donationNumber} className="pagamentoSucesso-numero">
                  {donationNumber}
                </span>
                <a
                  className="pagamentoSucesso-link"
                  href={`https://www.doearenacorinthians.com.br/minha-conta/pedido/${donationNumber}/detalhe`}
                >
                  Acompanhar doação
                </a>
              </div>
              <div className="pagamentoSucesso-boxRight">
                <div className="pagamentoSucesso-boxRight-img">
                  <img
                    src="https://www.doearenacorinthians.com.br/checkout/tema/checkout/img/svgs/check.svg"
                    alt="check"
                  />
                </div>
                <div>
                  <div className="pagamentoSucesso-texto01">Falta pouco para fazer parte dessa história!</div>
                  <div className="pagamentoSucesso-texto02">
                    Falta pouco para finalizar sua doação, basta realizá-la pelo QR Code ou copiando e colando o código Pix em seu banco preferido.
                  </div>
                  <div className="pagamentoSucesso-boxWhatsapp hide">
                    <input type="checkbox" name="whatsappTransacional" id="whatsappTransacional" />
                    <label htmlFor="whatsappTransacional">Deseja receber atualizações do seu pedido via WhatsApp?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagamentoSucesso;
