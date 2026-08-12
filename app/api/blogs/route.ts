// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";


// // CREATE BLOG

// export async function POST(request:Request){

// try{

// const body = await request.json();


// const blog = await prisma.blog.create({

// data:{
// categoryId: body.categoryId,
// title: body.title,
// slug: body.slug,
// author: body.author,
// date: new Date(body.date),
// image: body.image,
// image2: body.image2,
// video: body.video,
// articleOne: body.articleOne,
// articleTwo: body.articleTwo
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




// // GET ALL BLOGS

// export async function GET(){

// try{


// const blogs = await prisma.blog.findMany({

// include:{
// category:true
// }

// });


// return NextResponse.json(blogs);


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


// CREATE BLOG

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const blog = await prisma.blog.create({
      data: {
        categoryId: Number(body.categoryId),

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


// GET ALL BLOGS

export async function GET() {
  try {

    const blogs = await prisma.blog.findMany({
      include: {
        category: true,
      },
    });

    return NextResponse.json(blogs);

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