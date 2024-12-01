// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe('pk_live_51QRAoDLzTG8JwAi9VuHIJxJwBxLZtmkro54r6oW7CdLehN9Jw9SHyCNAl52D8iQLbuqL0ApHysO98HkpBMRHW2g600K2Wgab76', {
//   apiVersion: '2024-11-20.acacia', // Defina a versão da API da Stripe
// });


// export async function POST(request: Request) {
//     try {
//       const { amount } = await request.json();
  
//       // Criar PaymentIntent com método Pix
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: amount, // Valor em centavos
//         currency: 'brl', // Moeda brasileira
//         payment_method_types: ['pix'], // Pix como método de pagamento
//         payment_method_options: {
//           pix: {
//             expires_after_seconds: 3600, // Exemplo de tempo de expiração de 1 hora
//           },
//         },
//       });
  
//       // Recupere a cobrança associada ao PaymentIntent
//       const charge = await stripe.charges.retrieve(paymentIntent.chargea.data[0].id);
  
//       // Verifique se o QR Code Pix está disponível
//       const qrCodeUrl = charge.payment_method_details?.pix?.qr_code_url;
  
//       if (!qrCodeUrl) {
//         return NextResponse.json({ error: 'QR Code Pix não disponível.' }, { status: 500 });
//       }
  
//       // Retorne o clientSecret e o QR Code URL
//       return NextResponse.json({
//         clientSecret: paymentIntent.client_secret,
//         qrCodeUrl: qrCodeUrl,
//       });
  
//     } catch (error: any) {
//       console.error(error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }
//   }