// Importações necessárias do React e outras dependências
import React from 'react';

type CampaignSectionProps = {
    // Props podem ser definidos aqui, caso precise passar algo dinamicamente
};

export const CampaignSection: React.FC<CampaignSectionProps> = (props) => {
  return (
    <section data-v-35eabd28="" data-v-5dcda68c="" className="layout-campaign" id="campanha">
        <img data-v-35eabd28="" className="texture04" 
             src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/texture-w-h-_Pt2-Tdg.webp" 
             alt="Textura para efeito 4" 
             aria-hidden="true" />

        <div data-v-35eabd28="" className="layout-campaign__left">
            <div data-v-35eabd28="" className="layout-campaign__left__text">
                <h2 data-v-35eabd28="">A CAMPANHA</h2>
                <p data-v-35eabd28="">
                    Convocamos a Fiel Torcida para fazer parte de mais um momento <b data-v-35eabd28="">importante para a história do Corinthians.</b>
                </p>
                <p data-v-35eabd28="">
                    A campanha de arrecadação de fundos que está sendo desenvolvida de forma independente pela torcida tem como objetivo <b data-v-35eabd28="">contribuir com a quitação da dívida entre o Clube e a Caixa Econômica Federal</b> que surge do financiamento realizado para a construção do estádio no ano de 2011. 
                </p>
                <p data-v-35eabd28="">
                    O apoio de cada torcedor será <b data-v-35eabd28="">fundamental para alcançarmos os resultados esperados</b> desta iniciativa e nos <b data-v-35eabd28="">orgulharmos do legado deixado para as próximas gerações de corinthianos.</b>
                </p>
                <p data-v-35eabd28="" className="layout-campaign__left__text__emphasis">FAÇA PARTE DESSA MISSÃO!</p>
            </div>
        </div>

        <div data-v-35eabd28="" className="layout-campaign__right">
            <img data-v-35eabd28="" src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/01-BPPZtDjJ.webp" 
                 alt="Neo Química Arena" 
                 width="578" 
                 height="340.31" 
                 loading="eager" 
                 fetchPriority="high" />
        </div>
    </section>
  );
};
