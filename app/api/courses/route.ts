import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET() {
  try {

    const courses = await prisma.course.findMany({
      include:{
        category:true
      }
    });


    return NextResponse.json(courses);

  } catch(error){

    console.error(error);

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
export async function POST(request:Request){

try{

const body = await request.json();


const course = await prisma.course.create({

data:{
categoryId:body.categoryId,
title:body.title,
slug:body.slug,
price:body.price,
buyButtonText:body.buyButtonText,
lessons:body.lessons,
description:body.description,
duration:body.duration,
lectures:body.lectures,
skillLevel:body.skillLevel,
videoDuration:body.videoDuration,
participants:body.participants,
image:body.image
}

});


return NextResponse.json(course);


}catch(error){

console.log(error);


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