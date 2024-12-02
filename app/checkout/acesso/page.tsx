"use client";
import { useState, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import Doacao from "../components/Doacao";
import Footer from "../components/Footer";
import ResumoDoacao from "../components/ResumoDoacao";
import CheckoutInfo from "../components/CheckoutInfo";
import { useContributionContext } from '@/app/context/ContributionContext';
import CheckoutFormMP from "../components/CheckoutFormMP";

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // Controla em qual etapa o usuário está
  const { selectedAmount } = useContributionContext(); // Obtém o valor selecionado da doação
  const formatToBRL = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Função para avançar para a próxima etapa
  const handleNextStep = () => {
    console.log(`Avançando para a próxima etapa: ${step + 1}`);
    setStep(prevStep => prevStep + 1); // Avançar para a próxima etapa
  };

  // UseEffect para debugar e verificar o estado inicial
  useEffect(() => {
    console.log(`Passo inicial é: ${step}`);
  }, [step]);

  return (
    <div>
      <CheckoutHeader /> {/* Cabeçalho do checkout */}

      <main>
        <section className="checkout">
          <div className="row align-center">
            {/* Etapa 1 - Exibição do formulário de checkout */}
            {step === 1 && (
              <div className="w-full max-w-6xl flex md:flex-row flex-col justify-between">
                <CheckoutForm handleGoToDonation={() => setStep(2)} />
                <Doacao />
                <ResumoDoacao />
              </div>
            )}

            {/* Etapa 2 - Exibição do QR Code de pagamento via Pix */}
            {step === 2 && (
              <CheckoutFormMP selectedAmount={selectedAmount || 0} formatToBRL={formatToBRL} />
            )}

          </div>
        </section>
      </main>

      <Footer /> {/* Rodapé da página */}
    </div>
  );
}
