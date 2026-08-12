import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{

const {id}=await params;


const feature = await prisma.courseFeature.findUnique({

where:{
id:Number(id)
}

});


return NextResponse.json(feature);


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


const body = await request.json();


const feature = await prisma.courseFeature.update({

where:{
id:Number(id)
},


data:{
courseId:body.courseId,
feature:body.feature
}

});


return NextResponse.json(feature);


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


const feature = await prisma.courseFeature.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Feature deleted successfully",

feature

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