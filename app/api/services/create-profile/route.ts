import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { partialUserSchema } from "@/lib/validation";
import { uploadImageUrl } from "../../utils/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST(request: NextRequest) {
  const { getUser } = getKindeServerSession(); // If user exist then getting there data
  const user = await getUser();

  const body = await request.formData(); // getting user input from client
  const file = body.get("file") as File; // extracting file for creating there url

  const rawData : any = {} //created empty object which extract and holds the user input from formData ( body )
  // Here extracting logic
  body.forEach((value , key) => {
    if(value !== ""){
      rawData[key] = value
    }
  });

  // here iam using partial validation if fields exist then must validate otherwise process further
  const parsedData = await partialUserSchema.safeParseAsync(rawData); 

  // handlig validation error
  if (!parsedData.success)
    return Response.json(
      { error: parsedData.error.issues[0].message },
      { status: 400 }
    );

    // if given input are validated then getting it together
    const validationData :any = parsedData.data;

    // verifying if user exist or they want to update there profile 
    const existingUser = await prisma.user.findUnique({ where : { kindeId : user?.id }});

    let response;

  try {
    // here image convert in url with help of Cloudinary
    const getImage = await uploadImageUrl(file);
    
    // according to user appearance handling there status
    if(existingUser){
      response = await prisma.user.update({
        where : { kindeId : user?.id },
        data : {
          ...validationData,
          logo : getImage?.secure_url,
        }
      });
    }else{
      response = prisma.user.create({
        data:{
          ...validationData,
          logo : getImage?.secure_url,
          kindeId : user?.id as string
        }
      })
    }

    // according to user appearance handling there message
    const message = existingUser ? "Profile updated successfully" 
    : "Profile created successfully";
   
    return Response.json(
      { message, data: response },
      { status: 200 }
    );

  } catch (error: any) {
    console.log(error.message);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
