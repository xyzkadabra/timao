import React from 'react';

type ContributionSectionProps = {
    // Props podem ser adicionadas aqui se necessário
};

export const ContributionSection: React.FC<ContributionSectionProps> = (props) => {
    return (
        <section data-v-b69e10aa="" data-v-5dcda68c="" className="contribution" id="contribua">
            <h2 data-v-b69e10aa="" className="contribution__title">FAÇA PARTE DESSA MISSÃO!</h2>
            <p data-v-b69e10aa="" className="contribution__desc">
                Cada doação fará a diferença para chegarmos ao objetivo final desta campanha! <br data-v-b69e10aa="" />
                Defina o valor da sua contribuição e venha fazer parte dessa jornada histórica ao lado da Fiel Torcida.
            </p>

            <div data-v-b69e10aa="" className="contribution__options">
                {/* Repeat for each contribution option */}
                {[10, 20, 50, 100].map((amount, index) =>
                    <div key={index} data-v-b69e10aa="" className="item-wrapper-selection">
                        <div data-v-b69e10aa="" className="item-wrapper-selection__top">
                            <span data-v-b69e10aa=""></span>
                        </div>
                        <button data-v-b69e10aa="" className="contribution__options__item">
                            <p data-v-b69e10aa="" className="contribution__options__item__title">Quero contribuir com</p>
                            <p data-v-b69e10aa="" className="contribution__options__item__price-item">R$ {amount.toFixed(2)}</p>
                        </button>
                    </div>
                )}
            </div>

            <button data-v-b69e10aa="" aria-label="Fazer minha contribuição" className="contribution__cta cta-contribute disabled">
                Fazer contribuição
            </button>

            <p data-v-b69e10aa="" className="contribution__terms">
                Ao prosseguir, você concorda com nossos <button data-v-b69e10aa="" className="contribution__terms__button">Termos de Uso.</button>
            </p>

            <div data-v-34176bca="" data-v-b69e10aa="" className="terms-sheet">
                <div data-v-34176bca="" className="terms-sheet__foreground" style={{ display: 'none' }}></div>
                <div data-v-34176bca="" className="terms-sheet__wrapper" style={{ display: 'none' }}>
                    {/* Term content component can be extracted here as a separate component if necessary */}
                    {/* Snipped for brevity - insert the detailed terms content structure appropriately */}
                </div>
            </div>
        </section>
    );
};

