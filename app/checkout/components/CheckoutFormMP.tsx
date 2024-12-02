import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Importa o gerador de QR Code com Canvas
import PagamentoSucesso from "./PagamentoSucesso";
import CheckoutAddress from "./CheckoutAddress";
import DonationSummary from "./DonationSummary";

interface CheckoutFormProps {
  selectedAmount: number;
  formatToBRL: (value: number) => string;
}

const CheckoutFormMP: React.FC<CheckoutFormProps> = ({
  selectedAmount,
  formatToBRL,
}) => {
  const [qrCodeData, setQrCodeData] = useState<string | null>(null); // Estado para armazenar o código do Pix
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  // Função para criar o pagamento no backend e obter o código Pix
  useEffect(() => {
    const createPayment = async () => {
      if (selectedAmount <= 0) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/pix-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            transaction_amount: selectedAmount,
            description: "Pagamento via Pix",
            email: "cliente@email.com", // Aqui você pode passar os dados reais
            name: "Cliente Teste",
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Armazene o código Pix (QR Code data)
          setQrCodeData(data.qr_code); // Espera-se que `qr_code` seja o valor Pix
        } else {
          throw new Error(data.error || "Erro ao criar pagamento");
        }
      } catch (error) {
        setError("Erro ao processar pagamento");
      } finally {
        setLoading(false);
      }
    };

    if (selectedAmount > 0) {
      createPayment();
    }
  }, [selectedAmount]);

  // Função para copiar o código Pix para a área de transferência
  const handleCopyPix = () => {
    if (qrCodeData) {
      navigator.clipboard.writeText(qrCodeData).then(
        () => {
          alert("Chave Pix copiada com sucesso!");
        },
        (err) => {
          console.error("Erro ao copiar a chave Pix: ", err);
          alert("Falha ao copiar a chave Pix.");
        }
      );
    }
  };

  return (
    <div>
      {qrCodeData && <PagamentoSucesso />}
      <div className="row">
        <div className="small-12 columns">
          <div className="row"></div>

          <div className="row" id="atualizarMensagens"></div>
        </div>

        <div className="small-12 columns"></div>

        <div className="small-12 columns"></div>
      </div>
      <div className="row align-center">
        <div className="small-12 medium-6 large-4 columns">
          <div className="mainBox pagamento boxAtivo">
            <div className="t1 identificacao-t1">
              <h3>2. Doação</h3>
            </div>
            <div className="mainBox-conteudo">
              <form
                id="formPagamentoPix"
                className="boxCheckout-formulario validacao formPagamentoSubmit"
                method="post"
              >
                <div className="mainBox-conteudo-opcaoPag-valorBoletoPayPal">
                  <span className="mainBox-conteudo-opcaoPag-valorBoletoPayPal-valor text-center">
                    Valor da doação:{" "}
                    {selectedAmount && formatToBRL(selectedAmount)}
                  </span>
                </div>
                {error && <div className="text-red-500">{error}</div>}{" "}
                {/* Exibição de erro */}
                {loading && <div>Gerando QR Code...</div>}{" "}
                {/* Exibição de carregamento */}
                {qrCodeData ? (
                  <div className="qr-code-container">
                    <h4>Pagamento via Pix</h4>
                    <p>Escaneie o QR Code abaixo para realizar o pagamento:</p>
                    <div className="flex justify-center items-center">
                      <QRCodeCanvas value={qrCodeData} size={256} />
                    </div>
                  </div>
                ) : (
                  <div className="text-center">Aguardando QR Code...</div>
                )}
                <div className="boxCheckout-codigoPix text-center">
                  <button
                    type="button"
                    name="button"
                    id="copiarPix"
                    onClick={handleCopyPix} // Função de copiar Pix
                    disabled={!qrCodeData} // Desabilitar o botão até o QR Code ser gerado
                  >
                    Copiar código Pix{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <CheckoutAddress />
        <DonationSummary/>
      </div>
    </div>
  );
};

export default CheckoutFormMP;
