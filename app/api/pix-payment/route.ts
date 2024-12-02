import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.NEXT_PUBLIC_MERCADO_PAGO_ACCESS_TOKEN!,
});

type ExtendedResponseFields = {
    point_of_interaction?: {
      transaction_data?: {
        qr_code: string;
        qr_code_base64: string;
      };
    };
  };

export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
  
      const payment = new Payment(client);
      const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
  
      const result = await payment.create({
        body: {
          transaction_amount: body.transaction_amount,
          description: body.description,
          payment_method_id: "pix",
          payer: {
            email: body.email,
            last_name: body.name,
          },
        },
        requestOptions: {
          idempotencyKey,
        },
      });
  
      console.log("Full API Response:", JSON.stringify(result, null, 2));

      const transactionData = result.point_of_interaction?.transaction_data;
  
      console.log("Transaction Data:", transactionData);
      if (!transactionData) {
        console.error("Transaction data not found:", result.api_response);
        return NextResponse.json(
          { error: "QR Code data not found" },
          { status: 400 }
        );
      }
  
      const { qr_code, qr_code_base64 } = transactionData;
  
      return NextResponse.json({ qr_code, qr_code_base64 });
    } catch (error: any) {
      console.error("Error processing payment:", error);
      const errorDetails = error.response ? error.response.data : error.message;
      return NextResponse.json(
        { error: errorDetails || "Internal server error" },
        { status: 500 }
      );
    }
  }