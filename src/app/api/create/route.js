import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";


export async function POST(request) {
  try {
    const formData = await request.formData();

    
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact =  parseInt (formData.get("contact"), 10);
    const email_id = formData.get("email_id");

   
    const file = formData.get("image"); 
   
    let imagePath = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

     
      const uploadDir = path.join(process.cwd(), "public", "schoolImages");
      await fs.mkdir(uploadDir, { recursive: true });

      const filePath = path.join(uploadDir, file.name);
      await fs.writeFile(filePath, buffer);

      imagePath = `/schoolImages/${file.name}`; 
    }

   
    const newSchool = await prisma.schools .create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email_id,
        image: imagePath,
      },
    });

    return NextResponse.json(
      {
        message: "School created successfully",
        school: newSchool,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating school:", error);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}
