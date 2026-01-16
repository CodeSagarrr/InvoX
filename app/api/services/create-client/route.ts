import { NextRequest } from "next/server";
import { partialClientSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  // Getting required client data
  const body = await request.json();

  // validating data
  const parsedData = await partialClientSchema.safeParseAsync(body);

  if (!parsedData.success)
    return Response.json(
      { error: parsedData.error?.issues[0]?.message },
      { status: 400 }
    );

  const validateData: any = parsedData.data;
  try {
    // according user appearance handling logic
    const response = await prisma.client.create({
      data : {
        ...validateData,
      }
    });

    const message =  "Client added successfully";

    return Response.json({ message, data: response }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
