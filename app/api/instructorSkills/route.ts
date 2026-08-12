import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";



// CREATE SKILL

export async function POST(request:Request){

try{


const body = await request.json();



const skill = await prisma.instructorSkill.create({

data:{

instructorId:Number(body.instructorId),

skill:body.skill

},

include:{

instructor:true

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






// GET ALL SKILLS


export async function GET(){

try{


const skills = await prisma.instructorSkill.findMany({

include:{

instructor:true

}

});



return NextResponse.json(skills);



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