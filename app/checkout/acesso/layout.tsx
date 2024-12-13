import type { Metadata } from "next";

// Metadata da página

export default function RootLayout({
  children,
}: {
  // Tipagem explícita para os filhos
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
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
        <link
          rel="icon"
          href="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Doe Arena Corinthians</title>
        <script
          type="module"
          crossOrigin=""
          src="https://www.doearenacorinthians.com.br/tema/doe-arena-corinthians-front/dist/assets/index-Chl56uTM.js"
        ></script>

        <link
          rel="stylesheet"
          crossOrigin=""
          href="https://www.doearenacorinthians.com.br/checkout/tema/checkout/handler/checkout-acesso.css?v=1733046159"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.doearenacorinthians.com.br/checkout/tema/checkout/handler/checkout-confirmacao.css?v=1733109470"
          media="screen"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
