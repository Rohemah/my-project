import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// CREATE COURSE INSTRUCTOR

export async function POST(request:Request){

try{

const body = await request.json();


const courseInstructor = await prisma.courseInstructor.create({

data:{
courseId: body.courseId,
instructorId: body.instructorId
}

});


return NextResponse.json(courseInstructor);


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


const courseInstructors = await prisma.courseInstructor.findMany({

include:{
course:true,
instructor:true
}

});


return NextResponse.json(courseInstructors);


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