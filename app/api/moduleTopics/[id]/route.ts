import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const topic = await prisma.moduleTopic.findUnique({

where:{
id:Number(id)
},

include:{
module:true
}

});


return NextResponse.json(topic);


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






// UPDATE TOPIC

export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const body = await request.json();


const topic = await prisma.moduleTopic.update({

where:{
id:Number(id)
},

data:{
moduleId:body.moduleId,
topic:body.topic
}

});


return NextResponse.json(topic);


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







// DELETE TOPIC

export async function DELETE(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const topic = await prisma.moduleTopic.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Module topic deleted successfully",

topic

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