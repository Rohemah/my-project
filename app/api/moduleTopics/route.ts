import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// CREATE TOPIC

export async function POST(request:Request){

try{

const body = await request.json();


const topic = await prisma.moduleTopic.create({

data:{
moduleId: body.moduleId,
topic: body.topic
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



// GET ALL TOPICS

export async function GET(){

try{


const topics = await prisma.moduleTopic.findMany({

include:{
module:true
}

});


return NextResponse.json(topics);


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