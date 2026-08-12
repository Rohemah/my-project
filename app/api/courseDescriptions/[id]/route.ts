import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// GET BY ID

export async function GET(
request:Request,
{params}:{params:Promise<{id:string}>}
){

try{


const {id}=await params;


const description = await prisma.courseDescription.findUnique({

where:{
id:Number(id)
}

});


return NextResponse.json(description);


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



const description = await prisma.courseDescription.update({

where:{
id:Number(id)
},


data:{


courseId:body.courseId,

descriptionOne:body.descriptionOne,

descriptionTwo:body.descriptionTwo


}


});


return NextResponse.json(description);



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


const description = await prisma.courseDescription.delete({

where:{
id:Number(id)
}

});


return NextResponse.json({

message:"Course description deleted successfully",

description

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