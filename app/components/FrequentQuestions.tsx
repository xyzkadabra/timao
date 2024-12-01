"use client";
import React, { useEffect, useState } from "react";

interface Question {
  title: string;
  content: string;
}

const questionsData: Question[] = [
  {
    title: "Por que a Fiel Torcida está fazendo essa campanha de arrecadação?",
    content:
      "A Fiel Torcida sempre esteve presente em momentos importantes na história do Corinthians dentro e fora de campo. Nós acreditamos que, ao contribuirmos com a quitação da dívida com a Caixa, o clube ganha mais saúde financeira para gerir o estádio e resolver os demais desafios de gestão que enfrenta atualmente.",
  },
  {
    title: "Como eu posso contribuir para a campanha?",
    content:
      "Você pode contribuir realizando uma ou mais doações de qualquer valor durante a realização da campanha, além de divulgar e engajar todos os corinthianos que fazem parte da sua rede.",
  },
  {
    title: "Para onde vai o dinheiro arrecadado?",
    content:
      "O valor doado pelos torcedores é depositado em uma conta escrow da Caixa e só poderá ser movimentada após o encerramento da campanha para abatimento/quitação da dívida da Arena Corinthians.",
  },
  {
    title: "O que é uma conta escrow?",
    content:
      "É conta-caução ou conta de garantia, é uma ferramenta bancária que funciona como uma garantia em acordos comerciais.",
  },
  {
    title: "Qual é o valor total da dívida?",
    content:
      "Na apresentação financeira divulgada pelo Corinthians em 13 de setembro de 2024, a dívida relacionada ao financiamento com a Caixa está em torno de R$ 710 milhões.",
  },
  {
    title:
      "Caso seja arrecadado um valor menor que a meta da campanha, o que será feito?",
    content:
      "Realizaremos uma negociação com a Caixa para abatimento e/ou quitação total da dívida.",
  },
  {
    title: "Quais são as formas de doação?",
    content:
      "A única forma de doação é por meio da chave pix gerada pela plataforma oficial da campanha www.doearenacorinthians.com.br.",
  },
  {
    title: "Posso doar qualquer valor?",
    content:
      "O valor mínimo de doação será de R$ 10. É importante que fique atento à tributação do ITCMD (Imposto sobre Transmissão Causa Mortis e Doação de quaisquer Bens ou Direitos) do seu estado. Em São Paulo, por exemplo, a isenção da doação é aceita quando o valor total transmitido em um ano pelo mesmo doador ao mesmo donatário não ultrapassar o valor de R$ 88.400.",
  },
  {
    title: "Haverá alguma contrapartida?",
    content:
      "Todos os doadores receberão um certificado de participação. Além disso, realizaremos sorteios semanais de ingressos entre os doadores para os jogos realizados na Arena Corinthians até o fim da campanha. Os torcedores que acumularem R$ 100 em doações, terão o nome eternizado em um mural físico que será construído na Arena Corinthians após a realização da campanha.",
  },
  {
    title: "Até quando posso contribuir?",
    content:
      "Você pode contribuir durante o período em que a campanha estiver no ar. Ela será realizada no período de seis meses, mas caso a meta seja alcançada de forma antecipada, encerraremos a campanha imediatamente.",
  },
  {
    title: "Como posso acompanhar o andamento da campanha?",
    content:
      "As comunicações da campanha serão divulgadas nos canais do Gaviões da Fiel e das demais torcidas organizadas do Corinthians, na página dos embaixadores e por esta plataforma, que apresentará em tempo real o valor arrecadado. Fique de olho e celebre cada vitória conosco nessa caminhada!",
  },
  {
    title:
      "Qual será o mecanismo utilizado para garantir a credibilidade da campanha?",
    content:
      "Além de contarmos com o placar da arrecadação em tempo real, instituímos um Comitê Fiscal para acompanhar toda a operação da campanha e que nos fornecerá relatórios mensais sobre as transições que estão ocorrendo na plataforma.",
  },
  {
    title: "Quem está organizando essa campanha?",
    content:
      "Essa campanha é liderada pelo Grêmio Gaviões da Fiel Torcida, principal torcida organizada do Corinthians. A instituição conta com um comitê gestor formado por seus integrantes para conduzir o projeto de forma responsável e transparente para todos os corinthianos.",
  },
];

const AccordionItem: React.FC<{
  question: Question;
}> = ({ question}) => {
  const [open, setOpen] = useState<boolean>(false);


  return (
    <div
      className="accordion questions__acordion"
      data-v-facba76d=""
      data-v-e1b4b32e=""
      data-state={open ? "open" : "closed"}
      onClick={() => setOpen(!open)}
    >
      <div className="accordion__header" data-v-facba76d="" 
      >
        <div className="questions__acordion__topo" data-v-e1b4b32e="">
          <p data-v-e1b4b32e="">{question.title}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            data-v-e1b4b32e=""
            fill="#fff"
          >
            <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
          </svg>
        </div>
      </div>
      <div
        className="accordion__content"
        data-v-facba76d=""
        style={{
          gridTemplateRows:  !open ? "0" : "1fr",
        }}
      >
        <div className="accordion__content-wrapper" data-v-facba76d="">
          <div className="accordion__content-margin-box" data-v-facba76d="">
            <div className="questions__acordion__content" data-v-e1b4b32e="">
              <p data-v-e1b4b32e="">{question.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FrequentQuestions: React.FC = () => {

  return (
    <div className="questions__wrappe row" data-v-e1b4b32e="">
      <h2 className="questions__title" data-v-e1b4b32e="">
        Perguntas frequentes
      </h2>
      {questionsData.map((question, index) => (
        <AccordionItem
          key={index}
          question={question}
        />
      ))}
    </div>
  );
};

export default FrequentQuestions;