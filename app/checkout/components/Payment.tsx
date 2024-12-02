"use client";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

const Payment = () => {
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_amount: 10.0,
          description: "Pagamento de teste via PIX",
          email: "cliente@email.com",
          name: "Cliente Teste",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao processar pagamento.");
      }

      setQrCodeData(data.qr_code);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Pagamento via PIX</h1>

      {error && <p className="text-red-500">{error}</p>}

      {loading && <p>Processando pagamento...</p>}

      {!loading && !qrCodeData && (
        <button
          onClick={createPayment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Gerar QR Code
        </button>
      )}

      {qrCodeData && (
        <div className="mt-4">
          <h2 className="text-lg font-medium">Leia o QR Code abaixo:</h2>
          <QRCodeCanvas value={qrCodeData} size={256} />
        </div>
      )}
    </div>
  );
};

export default Payment;
