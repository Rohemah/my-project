import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const highlight = await prisma.courseHighlight.findUnique({

where:{
id:Number(id)
}

});


return NextResponse.json(highlight);


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


const highlight = await prisma.courseHighlight.update({

where:{
id:Number(id)
},

data:{
courseId:body.courseId,
highlight:body.highlight
}

});


return NextResponse.json(highlight);


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


const highlight = await prisma.courseHighlight.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Highlight deleted successfully",

highlight

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