import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  try {
      const data = await prisma.user.findMany({
        where : { kindeId : user?.id },
        select : {
          id : true,
          name : true,
          email:true,
          logo : true,
          businessName:true,
          gstNumber:true,
          pan:true,
          address:true,
          plan:true,
          invoiceCount:true,
          createdAt :true
        }
      });

      if(!getUser) return Response.json({ error : "User not found" , data : getUser } , { status : 404 });

      return Response.json({ message : "success" , data  } , { status : 200 });
  } catch (error) {
      console.error("Error : " , error)
      return Response.json({ error : error } , { status : 500 });
  }
}
