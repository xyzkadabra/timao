"use client";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import Doacao from "../components/Doacao";
import Footer from "../components/Footer";
import Identificacao from "../components/Identificacao";
import ResumoDoacao from "../components/ResumoDoacao";
import CheckoutInfo from "../components/CheckoutInfo";
import { useContributionContext } from '@/app/context/ContributionContext';
import CheckoutFormStripe from "../components/CheckoutFormStripe";

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // Controla em qual etapa o usuário está
 const { selectedAmount } = useContributionContext();
  // Função para avançar para a etapa de doação
  const handleGoToDonation = () => {
    setStep(2); // Avançar para a segunda etapa (Doação)
  };
  const formatToBRL = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <div>
      <CheckoutHeader />

      <main>
        <section className="checkout">
          <div className="row align-center">
            {/* Formulário de checkout que aparece na primeira etapa */}
            {step === 1 && (
              <CheckoutForm handleGoToDonation={handleGoToDonation} />
            )}
            {step === 1 && (
              <div className="small-12 medium-6 large-4 columns pai-mainBox">
                <Doacao />
              </div>
            )}
            {step === 1 && (
              <div className="small-12 large-4 columns">
                <ResumoDoacao />
              </div>
            )}
            {/* Se for a etapa de doação, exibe o card de Doação */}
            {step === 2 && (
              <>
                <CheckoutInfo />
             <CheckoutFormStripe selectedAmount={selectedAmount || 0}  formatToBRL={formatToBRL}/>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
