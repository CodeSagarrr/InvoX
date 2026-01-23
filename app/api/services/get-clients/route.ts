import { NextRequest } from "next/server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function GET( request : NextRequest ) {
    const { isAuthenticated } = getKindeServerSession();

    if(!await(isAuthenticated())) return Response.json({ error : "Not authenticated " } , { status : 404 });

    return Response.json({ msg : " authenticated"  } , { status : 404 });
}