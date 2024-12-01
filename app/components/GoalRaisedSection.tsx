import React from 'react';

type GoalRaisedSectionProps = {
    amountRaised: string;
    lastUpdate: string;
    nextUpdate: string;
    goalAmount: string;
};

const GoalRaisedSection: React.FC<GoalRaisedSectionProps> = ({
    amountRaised,
    lastUpdate,
    nextUpdate,
    goalAmount
}) => {
    return (
        <div data-v-e558f6db="" data-v-5dcda68c="" className="goal-raised">
            <h2 data-v-e558f6db="" className="goal-raised__title-transparency">Transparência</h2>
            <p data-v-e558f6db="" className="goal-raised__sub-desc">
                Confira o total arrecadado com as doações até o momento:
            </p>
            <div data-v-e558f6db="" className="goal-raised__moment">
                <p data-v-e558f6db="">R$ {amountRaised}</p>
            </div>
            <div data-v-e558f6db="" className="goal-raise__update">
                <p data-v-e558f6db=""> Última atualização {lastUpdate} &nbsp;| </p>
                <p data-v-e558f6db=""> Próxima atualização {nextUpdate}</p>
            </div>
            <p data-v-e558f6db="" className="goal-raised__mark">
                Arrecadados da meta de <b data-v-e558f6db="">R$ {goalAmount}</b>
            </p>
        </div>
    );
};

export default GoalRaisedSection;