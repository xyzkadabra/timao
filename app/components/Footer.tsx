"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer data-v-49c1040b="" className="footer" id="footer">
      <div data-v-49c1040b="" className="footer__line line--one">
        <div data-v-49c1040b="" className="footer__realization">
          <p data-v-49c1040b="" className="footer__realization__text">
            Realização:
          </p>
          <Image
            data-v-49c1040b=""
            className="footer__realization__image"
            src="/images/logo.webp"
            alt="doe arena corinthians"
            width={82.03}
            height={79.07}
            layout="fixed"
          />
        </div>
        <ul data-v-49c1040b="" className="footer__list-links">
          <li data-v-49c1040b="" className="footer__list-links__item">
            <button
              data-v-49c1040b=""
              aria-label="Ir para a página de termos de uso"
              className="footer__list-links__item__link"
            >
              {" "}
              Termos de Uso{" "}
            </button>
          </li>
          <li data-v-49c1040b="" className="footer__list-links__item">
            <button
              data-v-49c1040b=""
              aria-label="Ir para a página de política de privacidade"
              className="footer__list-links__item__link"
            >
              {" "}
              LGPD{" "}
            </button>
          </li>
        </ul>
      </div>

      <div data-v-49c1040b="" className="footer__line line--two">
        <ul data-v-49c1040b="" className="footer__social-medias">
          <li data-v-49c1040b="" className="footer__social-medias__item">
            <a
              data-v-49c1040b=""
              href="https://www.facebook.com/gavioesoficial1969"
              target="_blank"
              className="footer__social-medias__item__link"
            >
              <svg
                data-v-49c1040b=""
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_14003_18217)">
                  <path
                    d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_14003_18217">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li data-v-49c1040b="" className="footer__social-medias__item">
            <a
              data-v-49c1040b=""
              href="https://www.instagram.com/gavioesoficial"
              target="_blank"
              className="footer__social-medias__item__link"
            >
              <svg
                data-v-49c1040b=""
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_14003_18219)">
                  <path
                    d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                    fill="white"
                  ></path>
                  <path
                    d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                    fill="white"
                  ></path>
                  <path
                    d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_14003_18219">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li data-v-49c1040b="" className="footer__social-medias__item">
            <a
              data-v-49c1040b=""
              href="https://x.com/gavioesoficial"
              target="_blank"
              className="footer__social-medias__item__link"
            >
              <svg
                data-v-49c1040b=""
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6526 3.80786H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.5601L2 3.80786H15.9222L25.5348 16.5165L36.6526 3.80786ZM34.2846 39.5414H38.0232L13.8908 7.63413H9.87892L34.2846 39.5414Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </li>
          <li data-v-49c1040b="" className="footer__social-medias__item">
            <a
              data-v-49c1040b=""
              href="https://www.youtube.com/gavioesoficial"
              target="_blank"
              className="footer__social-medias__item__link"
            >
              <svg
                data-v-49c1040b=""
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div data-v-49c1040b="" className="footer__line line--three">
        <p data-v-49c1040b="" className="footer__copyright">
          Sport Club Corinthians Paulista © 2024 - Todos os direitos reservados
        </p>
        <a
          data-v-49c1040b=""
          href="https://uappi.com.br/?utm_source=doe-arena-corinthians&amp;utm_medium=site&amp;utm_content=footersite&amp;utm_campaign=referencia_cliente"
          target="_blank"
          aria-label="Ir para o site da Uappi Plataforma de e-commerce que transforma seu negócio"
          className="footer__uappi"
        >
          <svg
            data-v-49c1040b=""
            width="80"
            height="21"
            viewBox="0 0 80 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_14003_8546)">
              <path
                d="M32.6254 13.1618C32.6254 13.9783 31.812 14.6375 30.8086 14.6375C29.8052 14.6375 28.9917 13.9783 28.9917 13.1618V5.6749H25.4116V13.3044C25.4116 15.7246 27.8276 17.6873 30.8086 17.6873C33.7896 17.6873 36.2056 15.7246 36.2056 13.3044V5.6749H32.6254V13.1618ZM76.2981 17.4217H80V5.6749H76.2981V17.4217ZM70.2484 5.33057C68.6605 5.33057 67.5256 6.03892 66.7316 7.0916L66.264 5.6749H65.7477H63.1125V20.8306H66.8144V16.2067H66.8583C67.584 17.1954 68.6507 17.7906 70.151 17.7906C73.1953 17.7906 75.2168 15.3606 75.2168 11.5483C75.2216 8.01639 73.3366 5.33057 70.2484 5.33057ZM69.2012 14.8982C67.6133 14.8982 66.7024 13.5897 66.7024 11.686C66.7024 9.78235 67.5207 8.33613 69.133 8.33613C70.7209 8.33613 71.471 9.66921 71.471 11.686C71.4759 13.6832 70.6089 14.8982 69.2012 14.8982ZM46.8972 6.3193C46.0546 5.6749 44.8758 5.35516 43.1271 5.35516C39.6055 5.35516 37.9493 7.21458 37.8568 9.39374H41.2664C41.3785 8.405 41.9727 7.87866 43.1515 7.87866C44.2669 7.87866 44.7394 8.38532 44.7394 9.14286C44.7394 9.94468 43.9649 10.1759 41.7876 10.4513C39.3814 10.7711 37.3356 11.5532 37.3356 14.1456C37.3356 16.4625 38.9917 17.7267 41.3103 17.7267C43.0589 17.7267 44.0818 17.1069 44.7638 16.1231L45.1973 17.4315H45.6649H48.378V15.5967V11.5483V9.67905C48.3731 8.1984 47.8958 7.05225 46.8972 6.3193ZM44.8271 13.2257C44.8271 14.4899 43.8724 15.336 42.489 15.336C41.5782 15.336 40.9011 14.9671 40.9011 14.0275C40.9011 13.1322 41.4905 12.7633 42.9226 12.4436C43.6727 12.2616 44.3546 12.0746 44.832 11.8238V13.2257H44.8271ZM76.2981 0.563965V3.9729H80V0.563965H76.2981ZM57.0628 5.33057C55.4749 5.33057 54.34 6.03892 53.546 7.0916L53.0784 5.6749H52.5621H49.9269V20.8306H53.6288V16.2067H53.6727C54.3984 17.1954 55.4652 17.7906 56.9654 17.7906C60.0097 17.7906 62.0312 15.3606 62.0312 11.5483C62.036 8.01639 60.151 5.33057 57.0628 5.33057ZM56.0205 14.8982C54.4325 14.8982 53.5217 13.5897 53.5217 11.686C53.5217 9.78235 54.34 8.33613 55.9523 8.33613C57.5402 8.33613 58.2903 9.66921 58.2903 11.686C58.2903 13.6832 57.4282 14.8982 56.0205 14.8982ZM7.14077 17.4217H12.7034V6.18157H7.14077V17.4217ZM14.2864 10.2152H19.849V0.563965H14.2864V10.2152ZM0 17.4217H5.56259V11.8041H0V17.4217Z"
                fill="black"
              ></path>
              <path
                d="M19.8487 11.8042H14.2861V17.4218H19.8487V11.8042Z"
                fill="#FF4B00"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_14003_8546">
                <rect
                  width="80"
                  height="20.2667"
                  fill="white"
                  transform="translate(0 0.563965)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;