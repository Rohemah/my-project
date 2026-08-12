// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";




// // GET SINGLE BLOG

// export async function GET(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{

// const {id}=await params;


// const blog = await prisma.blog.findUnique({

// where:{
// id:Number(id)
// },

// include:{
// category:true,
// sections:true,
// lists:true
// }

// });


// return NextResponse.json(blog);


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }






// // UPDATE BLOG

// export async function PUT(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{

// const {id}=await params;


// const body=await request.json();


// const blog = await prisma.blog.update({

// where:{
// id:Number(id)
// },

// data:{
// title:body.title,
// slug:body.slug,
// author:body.author,
// date:new Date(body.date),
// image:body.image,
// image2:body.image2,
// video:body.video,
// articleOne:body.articleOne,
// articleTwo:body.articleTwo
// }

// });


// return NextResponse.json(blog);


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }






// // DELETE BLOG

// export async function DELETE(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{


// const {id}=await params;


// const blog = await prisma.blog.delete({

// where:{
// id:Number(id)
// }

// });


// return NextResponse.json({

// message:"Blog deleted successfully",

// blog

// });


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// GET SINGLE BLOG

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        category: true,
        sections: {
          orderBy: {
            displayOrder: "asc",
          },
        },
        lists: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(blog);

  } catch (error) {
    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}


// UPDATE BLOG

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const blog = await prisma.blog.update({
      where: {
        id: Number(id),
      },

      data: {
        title: body.title,
        slug: body.slug,

        // AUTHOR
        author: body.author,
        authorRole: body.authorRole || null,
        authorImage: body.authorImage || null,
        authorLink: body.authorLink || null,

        date: new Date(body.date),

        image: body.image || null,

        articleOne: body.articleOne || null,
        articleTwo: body.articleTwo || null,
      },
    });

    return NextResponse.json(blog);

  } catch (error) {
    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}


// DELETE BLOG

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Blog deleted successfully",
      blog,
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}