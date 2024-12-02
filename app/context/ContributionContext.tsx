"use client";
import React, { createContext, useContext, useState } from 'react';

// Define o tipo do contexto
type ContributionContextType = {
  selectedAmount: number | null;
  setSelectedAmount: (amount: number | null) => void;
  isDisabled: boolean;
  setIsDisabled: (disabled: boolean) => void;
  isLoading: boolean;  // Novo estado de loading
  setIsLoading: (loading: boolean) => void;  // Função para atualizar o loading
};

// Inicializa o contexto
const ContributionContext = createContext<ContributionContextType | undefined>(undefined);

// Hook para acessar o contexto
export const useContributionContext = () => {
  const context = useContext(ContributionContext);
  if (!context) {
    throw new Error("useContributionContext deve ser usado dentro de um ContributionProvider");
  }
  return context;
};

// Provedor do contexto
export const ContributionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Inicializando o estado de loading

  return (
    <ContributionContext.Provider value={{ selectedAmount, setSelectedAmount, isDisabled, setIsDisabled, isLoading, setIsLoading }}>
      {children}
    </ContributionContext.Provider>
  );
};
