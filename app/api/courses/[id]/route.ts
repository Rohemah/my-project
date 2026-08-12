import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// GET COURSE BY ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;


    const course = await prisma.course.findUnique({

      where:{
        id:Number(id)
      }

    });


    if(!course){

      return NextResponse.json(
        {
          message:"Course not found"
        },
        {
          status:404
        }
      );

    }


    return NextResponse.json(course);


  } catch(error){

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
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  try {

    const { id } = await params;

    const body = await request.json();


    const course = await prisma.course.update({

      where: {
        id: Number(id)
      },

      data: {

        categoryId: body.categoryId,
        title: body.title,
        slug: body.slug,
        price: body.price,
        buyButtonText: body.buyButtonText,
        lessons: body.lessons,
        description: body.description,
        duration: body.duration,
        lectures: body.lectures,
        skillLevel: body.skillLevel,
        videoDuration: body.videoDuration,
        participants: body.participants,
        image: body.image

      }

    });


    return NextResponse.json(course);


  } catch(error) {


    return NextResponse.json(
      {
        error: String(error)
      },
      {
        status:500
      }
    );


  }

}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {


  try {


    const { id } = await params;


    const course = await prisma.course.delete({

      where:{
        id:Number(id)
      }

    });


    return NextResponse.json({

      message:"Course deleted successfully",
      course

    });


  } catch(error) {


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