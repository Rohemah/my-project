import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{

const {id}=await params;


const instructor = await prisma.instructor.findUnique({

where:{
id:Number(id)
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





// UPDATE INSTRUCTOR


export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body=await request.json();



const instructor = await prisma.instructor.update({

where:{
id:Number(id)
},


data:{
name:body.name,
role:body.role,
students:body.students,
description:body.description,
image:body.image
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








// DELETE INSTRUCTOR


export async function DELETE(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const instructor = await prisma.instructor.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Instructor deleted successfully",

instructor

});


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