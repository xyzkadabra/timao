
export  function Header() {
    return (
      <div className="header-wrapper force-fill">
        <nav
          id="header-principal"
          className="column"
          style={{ display: "none" }}
        >
          <div className="header-principal__container">
            <ul className="header-principal__menu">
              <li className="highlight-line header-principal__menu__item">
                <a
                  href="https://www.doearenacorinthians.com.br/minha-conta/pedido"
                >
                  Minhas doações
                </a>
              </li>
              <li className="header-principal__menu__item">
                <a href="#campanha">A Campanha</a>
              </li>
              <li className="header-principal__menu__item">
                <a href="#motivacoes-para-doar">Motivações</a>
              </li>
              <li className="header-principal__menu__item">
                <a href="#historia">História</a>
              </li>
              <li className="header-principal__menu__item">
                <a href="#embaixadores">Embaixadores</a>
              </li>
              <li className="header-principal__menu__item">
                <a href="#perguntas">Perguntas</a>
              </li>
            </ul>
            <div data-v-f1fd3633 className="contribution-controll">
              <button
              data-v-f1fd3633
              
                aria-label="Fazer minha contribuição"
                className="contribution-controll__cta cta-contribute disabled"
              >
                Fazer contribuição
              </button>
              <div
                className="contribution-controll__back-value"
                style={{ display: "none" }}
              >
                <a href="#contribua" aria-label="Voltar ao topo do site">
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.329101 7.74756L8 0.0766602L15.6709 7.74756L14.3093 9.10914L8 2.79983L1.69069 9.10914L0.329101 7.74756Z"
                      fill="white"
                    />
                  </svg>
                  R$&nbsp;0,00
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  