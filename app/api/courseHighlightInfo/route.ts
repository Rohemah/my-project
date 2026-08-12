import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// CREATE

export async function POST(request: Request) {

  try {


    const body = await request.json();



    const highlightInfo = await prisma.courseHighlightInfo.create({

      data: {

        courseId: Number(body.courseId),

        title: body.title,

        description: body.description,

        footer: body.footer

      }


    });



    return NextResponse.json(highlightInfo);



  } catch(error) {


    return NextResponse.json(

      {
        error: String(error)
      },

      {
        status:500
      }

    );


  }

}







// GET ALL

export async function GET() {


  try {


    const highlightInfo = await prisma.courseHighlightInfo.findMany({

      include: {

        course: true

      }


    });



    return NextResponse.json(highlightInfo);



  } catch(error) {


    return NextResponse.json(

      {
        error:String(error)
      },

      {
        status:500
      }

    );


  }


}