import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// CREATE INSTRUCTOR

export async function POST(request: Request){

try{

const body = await request.json();


const instructor = await prisma.instructor.create({

data:{
name: body.name,
role: body.role,
students: body.students,
description: body.description,
image: body.image
}

});


return NextResponse.json(instructor);


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




// GET ALL INSTRUCTORS

export async function GET(){

try{


const instructors = await prisma.instructor.findMany();


return NextResponse.json(instructors);


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