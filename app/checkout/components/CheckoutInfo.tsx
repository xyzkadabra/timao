import { useState, useEffect } from 'react';

const CheckoutInfo: React.FC = () => {
  const [nomeRazao, setNomeRazao] = useState<string>('');
  const [cpfCnpj, setCpfCnpj] = useState<string>('');

  useEffect(() => {
    // Recuperar os dados do localStorage
    const savedNomeRazao = localStorage.getItem('nomeRazao');
    const savedCpfCnpj = localStorage.getItem('cpfCnpj');

    if (savedNomeRazao && savedCpfCnpj) {
      setNomeRazao(savedNomeRazao);
      setCpfCnpj(savedCpfCnpj);
    }
  }, []);

  return (
    <div className="small-12 medium-6 large-4 columns pai-mainBox">
      <div className=" px-6">
        <h3>Agradecimento</h3>
        <p>Olá <strong>{nomeRazao}</strong>,</p>
        <p>Seu CPF/CNPJ: <strong>{cpfCnpj}</strong></p>
        <p>
          Muito obrigado por fazer parte dessa jornada. Você está contribuindo para algo muito importante e
          que marcará a história do Corinthians. Sua participação é essencial para nós!
        </p>
      </div>
    </div>
  );
};

export default CheckoutInfo;
