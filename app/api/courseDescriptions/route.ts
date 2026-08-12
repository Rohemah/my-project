import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// CREATE
export async function POST(request: Request){

try{

const body = await request.json();


const description = await prisma.courseDescription.create({

data:{
courseId: body.courseId,
descriptionOne: body.descriptionOne,
descriptionTwo: body.descriptionTwo
}

});


return NextResponse.json(description);


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



// GET ALL

export async function GET(){

try{


// const descriptions = await prisma.courseDescription.findMany();
const descriptions = await prisma.courseDescription.findMany({
  include: {
    course: {
      select: {
        id: true,
        title: true,
      },
    },
  },
});


return NextResponse.json(descriptions);


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