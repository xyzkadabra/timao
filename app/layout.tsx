import type { Metadata } from "next";
import "./globals.css";
import { ContributionProvider } from "./context/ContributionContext";

// Metadata da página
export const metadata: Metadata = {
  title: "Doe Arena Corinthians",
  description: "Faça sua doação para a Arena Corinthians.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadados básicos */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="facebook-domain-verification"
          content="bla3dlb9fc3f31p8i4napjas0gjdqp"
        />

        {/* Título da página */}
        <title>Doe Arena Corinthians</title>

        {/* Pré-conexão e fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&amp;family=Oswald:wght@500&amp;display=swap"
          rel="stylesheet"
        />

        {/* Ícone da página */}
        <link
          rel="icon"
          href="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/favicon.ico"
        />

        {/* CSS externo */}
        <link
          rel="stylesheet"
          crossOrigin=""
          href="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/index-1SAA9ygl.css"
        />

        {/* Script externo */}
        <script
          type="module"
          crossOrigin=""
          src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/index-Chl56uTM.js"
        ></script>

        {/* Pixel do Facebook */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1296222145130811');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1296222145130811&ev=PageView&noscript=1"
            alt="facebook-pixel"
          />
        </noscript>
      </head>
      <body className="antialiased">
        <ContributionProvider>{children}</ContributionProvider>
      </body>
    </html>
  );
}
