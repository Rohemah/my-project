// app/api/modules/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




// CREATE MODULE

export async function POST(request: Request) {

  try {


    const body = await request.json();



    if(!body.courseId || !body.moduleName){

      return NextResponse.json(
        {
          error:"Course and Module Name are required"
        },
        {
          status:400
        }
      );

    }





    const module = await prisma.module.create({

      data:{


        courseId:Number(body.courseId),


        moduleName:body.moduleName,


        hours:body.hours || null,


        title:body.title || null,


        image:body.image || null


      }

    });





    return NextResponse.json(module);



  } catch(error){


    console.log("MODULE CREATE ERROR:",error);



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









// GET ALL MODULES


export async function GET(){


  try{


    const modules = await prisma.module.findMany({


      include:{


        course:true,


        topics:true


      },

      orderBy:{

        id:"desc"

      }


    });





    return NextResponse.json(modules);



  }catch(error){



    console.log("MODULE GET ERROR:",error);



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