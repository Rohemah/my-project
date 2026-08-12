import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// CREATE

export async function POST(request: Request) {


  try {


    const body = await request.json();



    const highlight = await prisma.courseHighlight.create({


      data: {

        courseId: Number(body.courseId),

        highlight: body.highlight

      }


    });



    return NextResponse.json(highlight);



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







// GET ALL

export async function GET() {


  try {


    const highlights = await prisma.courseHighlight.findMany({

      include:{

        course:true

      }

    });



    return NextResponse.json(highlights);



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