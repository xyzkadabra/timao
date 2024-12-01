import React from 'react';

type AboutArenaProps = {
    // Você pode adicionar mais props conforme necessário
};



export const AboutArena: React.FC<AboutArenaProps> = () => {
    return (
        <div data-v-4d5896f7="" data-v-5dcda68c="" className="about" id="historia">
            <h2 data-v-4d5896f7="" className="about__title">SOBRE A ARENA CORINTHIANS</h2>
            <img data-v-4d5896f7="" 
                 src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/evolucao-stadium%201-ZkKCrNWg.webp" 
                 alt="Sobre a arena corinthians" 
                 width="1373" 
                 height="277" 
                 className="about__img" 
                 loading="lazy" />
            <div data-v-4d5896f7="" className="about__text">
                <p data-v-4d5896f7="">A construção da Arena Corinthians iniciou em 30 de maio de 2011 e, após três anos de obras, ela foi inaugurada em 10 de maio de 2014, com a realização de um jogo marcante envolvendo a participação de mais de 100 ex-jogadores que passaram pelo clube.</p>
                <p data-v-4d5896f7="">O terreno de 197 mil m², está localizado na Av. Miguel Ignácio Curi, 111, no bairro de Itaquera, na Zona Leste de SP e tem capacidade para receber até 49 mil torcedores.</p>
                <p data-v-4d5896f7="">O primeiro jogo oficial do Corinthians na nova casa ocorreu em 18 de maio de 2014 contra o Figueirense. Já o primeiro gol foi marcado pelo Jadson no jogo contra o Botafogo no dia 1ª de junho do mesmo ano, ambos pelo Campeonato Brasileiro.</p>
                <p data-v-4d5896f7="">Em 2017, o Corinthians levantou o primeiro troféu na Arena após empatar em 1 a 1 contra a Ponte Preta no jogo de volta da final do Campeonato Paulista, realizado no dia 7 de maio.</p>
                <p data-v-4d5896f7=""><b data-v-4d5896f7="">10 anos depois da inauguração da Arena Corinthians, a Fiel Torcida se une para escrever um novo marco na história da sua casa</b></p>
            </div>
            <a data-v-4d5896f7="" href="#contribua" className="cta-contribute"> Contribua Já 
                <svg data-v-4d5896f7="" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 17.25L11.825 15.2563L16.7063 10.375H0V7.625H16.7063L11.825 2.74375L13.75 0.75L22 9L13.75 17.25Z" fill="white"></path>
                </svg>
            </a>
        </div>
    );
};

