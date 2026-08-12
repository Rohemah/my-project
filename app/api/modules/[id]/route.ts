import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const module = await prisma.module.findUnique({

where:{
id:Number(id)
},

include:{
topics:true
}

});


return NextResponse.json(module);


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





// UPDATE MODULE


export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body = await request.json();


const module = await prisma.module.update({

where:{
id:Number(id)
},

data:{
courseId:body.courseId,
moduleName:body.moduleName,
hours:body.hours,
title:body.title,
image:body.image
}

});


return NextResponse.json(module);


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







// DELETE MODULE


export async function DELETE(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const module = await prisma.module.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Module deleted successfully",

module

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