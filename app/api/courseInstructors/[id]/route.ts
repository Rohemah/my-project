import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{

const {id}=await params;


const courseInstructor =
await prisma.courseInstructor.findUnique({

where:{
id:Number(id)
},

include:{
course:true,
instructor:true
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





// UPDATE

export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body=await request.json();


const courseInstructor =
await prisma.courseInstructor.update({

where:{
id:Number(id)
},

data:{
courseId:body.courseId,
instructorId:body.instructorId
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






// DELETE

export async function DELETE(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const courseInstructor =
await prisma.courseInstructor.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Course instructor deleted successfully",

courseInstructor

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