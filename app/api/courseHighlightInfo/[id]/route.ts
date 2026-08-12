import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET BY ID

export async function GET(
request: Request,
{params}:{params:Promise<{id:string}>}
){

try{

const {id}=await params;


const highlightInfo =
await prisma.courseHighlightInfo.findUnique({

where:{
id:Number(id)
}

});


return NextResponse.json(highlightInfo);


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
request: Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body = await request.json();


const highlightInfo =
await prisma.courseHighlightInfo.update({

where:{
id:Number(id)
},


data:{
courseId:body.courseId,
title:body.title,
description:body.description,
footer:body.footer
}

});


return NextResponse.json(highlightInfo);


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
request: Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const highlightInfo =
await prisma.courseHighlightInfo.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Highlight info deleted successfully",

highlightInfo

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