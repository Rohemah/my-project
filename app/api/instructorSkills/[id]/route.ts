import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{

const {id}=await params;


const skill = await prisma.instructorSkill.findUnique({

where:{
id:Number(id)
}

});


return NextResponse.json(skill);


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






// UPDATE SKILL

export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body = await request.json();


const skill = await prisma.instructorSkill.update({

where:{
id:Number(id)
},

data:{
instructorId:body.instructorId,
skill:body.skill
}

});


return NextResponse.json(skill);


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







// DELETE SKILL

export async function DELETE(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const skill = await prisma.instructorSkill.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Instructor skill deleted successfully",

skill

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