import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// CREATE FEATURE

export async function POST(request: Request){

try{

const body = await request.json();


const feature = await prisma.courseFeature.create({

data:{
courseId: body.courseId,
feature: body.feature
}

});


return NextResponse.json(feature);


}catch(error){

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



// GET ALL FEATURES

export async function GET(){

  try{

    const features = await prisma.courseFeature.findMany({

      include:{
        course:{
          select:{
            id:true,
            title:true
          }
        }
      }

    });


    return NextResponse.json(features);


  }catch(error){

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