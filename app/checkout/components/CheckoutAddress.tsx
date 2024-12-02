import React, { useState, useEffect } from 'react';

const CheckoutAddress: React.FC = () => {
  // Definindo o estado para armazenar as informações
  const [name, setName] = useState<string>('***');
  const [address, setAddress] = useState<string>('***');
  const [postalCode, setPostalCode] = useState<string>('***');
  const [city, setCity] = useState<string>('***');

  // Usando useEffect para carregar as informações do localStorage quando o componente for montado
  useEffect(() => {
    const storedName = localStorage.getItem('nomeRazao');
    const storedAddress = localStorage.getItem('address');
    const storedPostalCode = localStorage.getItem('postalCode');
    const storedCity = localStorage.getItem('city');

    // Se as informações existirem no localStorage, atualiza o estado, caso contrário mantém "***"
    if (storedName) setName(storedName);
    if (storedAddress) setAddress(storedAddress);
    if (storedPostalCode) setPostalCode(storedPostalCode);
    if (storedCity) setCity(storedCity);
  }, []);

  return (
    <div className="small-12 medium-6 large-4 columns">
      <div className="boxCheckout">
        <div className="boxCheckout-topo">
          <span>Endereço de cobrança</span>
        </div>

        <div className="boxCheckout-formulario">
          <p className="boxCheckout-fontBlock">{name}</p>
          <p className="boxCheckout-text">
            {address}, CEP {postalCode}, {city}
          </p>
        </div>

        <div className="boxCheckout-formulario2">
          <p className="boxCheckout-fontBlock"></p>
          <p className="boxCheckout-text"><b>Grátis</b></p>
          <p className="boxCheckout-text">O prazo de entrega é de 0 após a emissão da nota fiscal.</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;
