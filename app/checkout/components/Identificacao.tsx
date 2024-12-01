"use client";
import React, { useState } from 'react';

const Identificacao: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className="mainBox identificacao boxAtivo">
      <div className="t1 identificacao-t1">
        <h3 className="labelIdentificacao">1. Identificação</h3>
      </div>

      <div className="boxFormularioCheckoutAcesso">
        <div className="mainBox-conteudo">
          <div className="mensagemRecuperacaoSenha"></div>
          <span className="mainBox-conteudo-t2">Informe seu e-mail, CPF ou CNPJ para continuar</span>

          <form id="formularioCheckoutAcesso" className="mainBox-conteudo-form" onSubmit={handleSubmit}>
            <div className="mainBox-conteudo-form-input valida-input iconeAjustado">
              <div className="mainBox-conteudo-form-input-validacao statusValido">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-label="E-mail, CPF ou CNPJ"
                  className="validate[required]"
                  id="form-validation-field-0"
                />
              </div>
              <div className="mainBox-conteudo-form-input-label labelCadastro inpAtivo">
                E-mail, CPF ou CNPJ
              </div>
            </div>

            <div className="mainBox-conteudo-form-bottom">
              <div className="mainBox-conteudo-form-bottom-bt">
                <button type="submit" className="btPadrao botaoCheckoutAcesso">
                  Continuar
                </button>
              </div>
              <span className="mainBox-conteudo-form-login-bottom-text">
                Seus dados pessoais estão protegidos, todas as informações são criptografadas para sua segurança.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Identificacao;
