import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Carregar a Stripe
const stripePromise = loadStripe('pk_live_51QRAoDLzTG8JwAi9VuHIJxJwBxLZtmkro54r6oW7CdLehN9Jw9SHyCNAl52D8iQLbuqL0ApHysO98HkpBMRHW2g600K2Wgab76'); // Sua chave pública da Stripe

interface CheckoutFormProps {
  selectedAmount: number;
  formatToBRL: (value: number) => string;
}

const CheckoutFormStripe: React.FC<CheckoutFormProps> = ({ selectedAmount, formatToBRL }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    // Função para criar o pagamento no backend
    const createPayment = async () => {
      try {
        const response = await fetch('/create-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: selectedAmount * 100 }), // Valor em centavos
        });

        const data = await response.json();
        setQrCodeUrl(data.qrCodeUrl); // Armazenar a URL do QR Code
      } catch (error) {
        console.error('Erro ao criar o pagamento:', error);
      }
    };

    if (selectedAmount > 0) {
      createPayment();
    }
  }, [selectedAmount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para finalizar a doação, por exemplo, redirecionar ou mostrar uma mensagem de sucesso.
    console.log('Pagamento processado');
  };

  return (
    <div className="small-12 medium-6 large-4 columns pai-mainBox">
      <div className="mainBox pagamento boxAtivo">
        <div className="t1 identificacao-t1">
          <h3>2. Doação</h3>
        </div>
        <div className="mainBox-conteudo">
          <form
            id="formPagamentoPix"
            className="boxCheckout-formulario validacao formPagamentoSubmit"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="mainBox-conteudo-opcaoPag-valorBoletoPayPal">
              <span className="mainBox-conteudo-opcaoPag-valorBoletoPayPal-valor text-center">
                Valor da doação: {selectedAmount && formatToBRL(selectedAmount)}
              </span>
            </div>

            {qrCodeUrl && (
              <div className="qr-code-container">
                <h4>Pagamento via Pix</h4>
                <p>Escaneie o QR Code abaixo para realizar o pagamento:</p>
                <img src={qrCodeUrl} alt="QR Code Pix" className="qr-code" />
              </div>
            )}

            <div className="mainBox-conteudo-btFinal text-center">
              <button
                type="submit"
                name="button"
                className="btPadrao"
                id="finalizarPedido"
                disabled={!qrCodeUrl} // Desabilitar o botão até o QR Code ser gerado
              >
                Finalizar doação
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormStripe;
