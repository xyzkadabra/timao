import React from "react";

type GoalRaisedSectionProps = {
  amountRaised: any;
};

const GoalRaisedSection: React.FC<GoalRaisedSectionProps> = ({
  amountRaised,
}) => {
  // Obtemos as datas do .env.local
  const lastUpdate = process.env.NEXT_PUBLIC_DATA_1 || "Data não definida";
  const nextUpdate = process.env.NEXT_PUBLIC_DATA_2 || "Data não definida";

  // Formata o número no formato BRL
  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <div data-v-e558f6db="" data-v-5dcda68c="" className="goal-raised">
      <h2 data-v-e558f6db="" className="goal-raised__title-transparency">
        Transparência
      </h2>
      <p data-v-e558f6db="" className="goal-raised__sub-desc">
        Confira o total arrecadado com as doações até o momento:
      </p>
      <div data-v-e558f6db="" className="goal-raised__moment">
        <p data-v-e558f6db="">{amountRaised}</p>
      </div>
      <div data-v-e558f6db="" className="goal-raise__update">
        <p data-v-e558f6db="">Última atualização {lastUpdate} &nbsp;| </p>
        <p data-v-e558f6db="">Próxima atualização {nextUpdate}</p>
      </div>
      <p data-v-e558f6db="" className="goal-raised__mark">
        Arrecadados da meta de{" "}
        <b data-v-e558f6db="">R$ 700.000.000,00</b>
      </p>
    </div>
  );
};

export default GoalRaisedSection;
