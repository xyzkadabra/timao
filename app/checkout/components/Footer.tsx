import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Seção 1: Proteção dos dados */}
      <section>
        <div className="rodapeCheckout-protecao">
          <div className="row align-middle align-justify">
            <div className="small-12 medium-6 columns">
              <div className="ambienteProtegido-left">
                <div className="ambienteProtegido-left-span">
                  <span>Seus dados estão protegidos</span>
                </div>
              </div>
            </div>
            <div className="small-12 medium-6 columns text-left medium-text-left">
              <div className="ambienteProtegido-right">
                <span className="flex">
                  <svg
                    data-v-b69e10aa=""
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.74053 17.5765L4.04053 11.8765L5.46553 10.4515L9.74053 14.7265L18.9155 5.55151L20.3405 6.97651L9.74053 17.5765Z"
                      fill="white"
                      style={{fill: "#bf8a49"}}
                    ></path>
                  </svg>
                  Seus dados pessoais não serão divulgados em hipótese alguma;
                </span>
                <span className="flex">
                  <svg
                    data-v-b69e10aa=""
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.74053 17.5765L4.04053 11.8765L5.46553 10.4515L9.74053 14.7265L18.9155 5.55151L20.3405 6.97651L9.74053 17.5765Z"
                      fill="white"
                      style={{fill: "#bf8a49"}}
                    ></path>
                  </svg>
                  
                  Possuímos certificados
                  que garantem 100% de confiança para seus dados;
                </span>
                <span className="flex">
                <svg
                    data-v-b69e10aa=""
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.74053 17.5765L4.04053 11.8765L5.46553 10.4515L9.74053 14.7265L18.9155 5.55151L20.3405 6.97651L9.74053 17.5765Z"
                      fill="white"
                      style={{fill: "#bf8a49"}}
                    ></path>
                  </svg>
                  
                  Todos os dados são
                  criptografados.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Loja Segura e selos */}
      <section>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns">
            <div className="large-flex-container align-top row-box-pagamentos">
              <div className="box-dez-vezes">
                <span className="rodape-t1">LOJA SEGURA</span>
                <div className="row">
                  <div className="columns selosFormaspag">
                    <a
                      href="https://www.sslshopper.com/ssl-checker.html#hostname=https://www.doearenacorinthians.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front-checkout/img/rodape/seguranca/site-seguro.svg"
                        alt="Selo site seguro"
                      />
                    </a>
                    <a
                      href="https://transparencyreport.google.com/safe-browsing/search?url=https://www.doearenacorinthians.com.br%2F&amp;hl=pt_BR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front-checkout/img/rodape/seguranca/google.png"
                        alt="Selo Google"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Copyright e logo */}
      <section className="final-rodape">
        <div className="row">
          <div className="small-12 columns text-center">
            <span>Copyright - - 2024 Todos os direitos reservados. </span>
          </div>
        </div>
        <div className="text-center">
          <a
            href="https://uappi.com.br/"
            target="_blank"
            className="logo-wap"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front-checkout/img/rodape/logos/uappi-logo-black.svg"
              alt="Logo Uappi "
            />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
