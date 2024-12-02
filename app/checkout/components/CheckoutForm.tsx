"use client";
import { useState } from 'react';

interface FormData {
  email: string;
  cpfCnpj: string;
  nomeRazao: string;
  celular: string;
  telefone: string;
  nascimento: string;
  sexo: string;
  senha: string;
}

const CheckoutForm: React.FC<{ handleGoToDonation: () => void }> = ({ handleGoToDonation }) => {
    const [formData, setFormData] = useState<FormData>({
    email: '',
    cpfCnpj: '',
    nomeRazao: '',
    celular: '',
    telefone: '',
    nascimento: '',
    sexo: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);

      
        // Salvar as informações no localStorage
        localStorage.setItem('nomeRazao', formData.nomeRazao);
        localStorage.setItem('cpfCnpj', formData.cpfCnpj);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('celular', formData.celular);
        localStorage.setItem('telefone', formData.telefone);
        localStorage.setItem('nascimento', formData.nascimento);
        localStorage.setItem('sexo', formData.sexo);
        localStorage.setItem('senha', formData.senha);
      
    
    // Call the handleGoToDonation function
    handleGoToDonation();  // This will trigger the donation process after form submission
  };

  return (
    <div className="small-12 medium-6 large-4 columns pai-mainBox">
      <div className="mainBox identificacao boxAtivo">
        <div className="t1 identificacao-t1">
          <h3>1. Identificação</h3>
        </div>

        <div className="mainBox-conteudo">
          <span className="mainBox-conteudo-t2 cadastro">
            Dados pessoais <span>* Campos obrigatórios</span>
          </span>

          <form
            id="formCadastroUsuario"
            className="mainBox-conteudo-form validacao formularioCheckout"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* E-mail */}
            <div className="boxInputMensagemCheckoutCadastro mensagemAtiva">
              <div className="mainBox-conteudo-form-input valida-input" data-mensagem="">
                <div className="mainBox-conteudo-form-input-validacao statusValido">
                  <input
                    id="email-cadastro"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="email validate[required,custom[email],custom[validarCaracteresEspeciais]]"
                    required
                  />
                </div>
                <div className="mainBox-conteudo-form-input-label labelCadastro inpAtivo">E-mail *</div>
              </div>
            </div>

            {/* CPF ou CNPJ */}
            <div className="boxInputMensagemCheckoutCadastro boxCampoCheckoutCadastro">
              <div className="mainBox-conteudo-form-input valida-input" data-mensagem="">
                <div className="mainBox-conteudo-form-input-validacao statusValido">
                  <input
                    id="cpf-cadastro"
                    type="tel"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    className="validate[required] maskCheckoutCPF campoCpfCnpj number-without-arrows"
                    maxLength={15}
                    required
                  />
                </div>
                <div className="mainBox-conteudo-form-input-label labelCadastro inpAtivo">CPF ou CNPJ *</div>
              </div>
            </div>

            {/* Nome completo */}
            <div className="boxCampoCheckoutCadastro">
              <div className="mainBox-conteudo-form-input valida-input">
                <div className="mainBox-conteudo-form-input-validacao">
                  <input
                    id="nome-cadastro"
                    type="text"
                    name="nomeRazao"
                    value={formData.nomeRazao}
                    onChange={handleChange}
                    className="validate[required,funcCall[checkNome],custom[validarCaracteresEspeciais]]"
                    data-label="Nome completo *"
                    placeholder='Nome completo'
                    required
                  />
                </div>
              </div>
            </div>

            {/* Data de nascimento */}
            <div className="form-cadastro-item-box boxCampoCheckoutCadastro">
              <div className="mainBox-conteudo-form-input valida-input">
                <div className="mainBox-conteudo-form-input-validacao">
                  <input
                    id="data-nascimento-cadastro"
                    type="date"
                    name="nascimento"
                    value={formData.nascimento}
                    onChange={handleChange}
                    className="validate[ custom[birthdayValid]] maskCheckoutData"
                    data-label="Data de nascimento"
                    maxLength={10}
                    placeholder='Data de nascimento'
                  />
                </div>
              </div>
              <small className="acessoMenores">
                Menores de 18 anos não estão autorizados a efetuar o cadastro em nosso site. Em caso de dúvidas entre em contato conosco através do número: .
              </small>
            </div>

            {/* Sexo */}
            <div className="mainBox-conteudo-form-cadastro-sexo boxCampoCheckoutCadastro boxCampoCheckoutCadastroSexo">
              <span className="mainBox-conteudo-form-cadastro-sexo-t1">Gênero</span>
              <div className="small-12 mainBox-conteudo-form-cadastro-sexo-boxOpcoes">
                <div className="small-4 generoMasc">
                  <input
                    type="radio"
                    value="m"
                    name="sexo"
                    id="masc"
                    onChange={handleChange}
                    checked={formData.sexo === 'm'}
                  />
                  <label htmlFor="masc">Masculino</label>
                </div>
                <div className="small-4 generoFem">
                  <input
                    type="radio"
                    value="f"
                    name="sexo"
                    id="fem"
                    onChange={handleChange}
                    checked={formData.sexo === 'f'}
                  />
                  <label htmlFor="fem">Feminino</label>
                </div>
                <div className="small-4 generoOutro">
                  <input
                    type="radio"
                    value="o"
                    name="sexo"
                    id="outro"
                    onChange={handleChange}
                    checked={formData.sexo === 'o'}
                  />
                  <label htmlFor="outro">Outro</label>
                </div>
              </div>
            </div>

            {/* Senha */}
            <div className="mainBox-conteudo-form-input boxCampoCheckoutCadastro">
              <div className="mainBox-conteudo-form-input-validacao statusInvalido">
                <input
                  id="senha-cadastro"
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  className="form-cadastro-item validate[required,minSize[6],custom[senhaSegura]]"
                  data-label="Senha * (6 ou mais caracteres)"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mainBox-conteudo-form-input-label labelCadastro inpAtivo">
                Senha * (6 ou mais caracteres)
              </div>
            </div>

            {/* Button */}
            <div className="mainBox-conteudo-form-bottom">
              <div className="mainBox-conteudo-form-bottom-bt">
                <button type="submit" className="btPadrao">
                  Ir para cobrança
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

export default CheckoutForm;