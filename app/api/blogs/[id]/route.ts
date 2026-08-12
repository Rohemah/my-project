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
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";


// // GET SINGLE BLOG

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const blog = await prisma.blog.findUnique({
//       where: {
//         id: Number(id),
//       },

//       include: {
//         category: true,
//         sections: {
//           orderBy: {
//             displayOrder: "asc",
//           },
//         },
//         lists: {
//           include: {
//             items: true,
//           },
//         },
//       },
//     });

//     if (!blog) {
//       return NextResponse.json(
//         {
//           error: "Blog not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json(blog);

//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: String(error),
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


// // UPDATE BLOG

// export async function PUT(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const body = await request.json();

//     const blog = await prisma.blog.update({
//       where: {
//         id: Number(id),
//       },

//       data: {
//         title: body.title,
//         slug: body.slug,

//         // AUTHOR
//         author: body.author,
//         authorRole: body.authorRole || null,
//         authorImage: body.authorImage || null,
//         authorLink: body.authorLink || null,

//         date: new Date(body.date),

//         image: body.image || null,

//         articleOne: body.articleOne || null,
//         articleTwo: body.articleTwo || null,
//       },
//     });

//     return NextResponse.json(blog);

//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: String(error),
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


// // DELETE BLOG

// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const blog = await prisma.blog.delete({
//       where: {
//         id: Number(id),
//       },
//     });

//     return NextResponse.json({
//       message: "Blog deleted successfully",
//       blog,
//     });

//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: String(error),
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =========================
// GET SINGLE BLOG
// =========================

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
        // =========================
        // CATEGORY
        // =========================
        category: true,

        // =========================
        // BLOG SECTIONS
        // =========================
        sections: {
          orderBy: {
            displayOrder: "asc",
          },
        },

        // =========================
        // BLOG LISTS
        // =========================
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
    console.error("GET Blog Error:", error);

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

// =========================
// UPDATE BLOG
// =========================

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
        // =========================
        // BASIC BLOG INFORMATION
        // =========================
        title: body.title,
        slug: body.slug,

        // =========================
        // AUTHOR
        // =========================
        author: body.author,

        // =========================
        // DATE
        // =========================
        date: new Date(body.date),

        // =========================
        // IMAGES
        // =========================
        image: body.image || null,
        image2: body.image2 || null,

        // =========================
        // VIDEO
        // =========================
        video: body.video || null,

        // =========================
        // ARTICLES
        // =========================
        articleOne: body.articleOne || null,
        articleTwo: body.articleTwo || null,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error("UPDATE Blog Error:", error);

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

// =========================
// DELETE BLOG
// =========================

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blogId = Number(id);

    // =========================
    // CHECK BLOG
    // =========================

    const existingBlog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },

      include: {
        sections: true,
        lists: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!existingBlog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }

    // =========================
    // DELETE LIST ITEMS
    // =========================

    const listIds = existingBlog.lists.map((list) => list.id);

    if (listIds.length > 0) {
      await prisma.blogListItem.deleteMany({
        where: {
          listId: {
            in: listIds,
          },
        },
      });
    }

    // =========================
    // DELETE BLOG LISTS
    // =========================

    await prisma.blogList.deleteMany({
      where: {
        blogId,
      },
    });

    // =========================
    // DELETE BLOG SECTIONS
    // =========================

    await prisma.blogSection.deleteMany({
      where: {
        blogId,
      },
    });

    // =========================
    // DELETE BLOG
    // =========================

    const blog = await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });

    return NextResponse.json({
      message: "Blog deleted successfully",
      blog,
    });
  } catch (error) {
    console.error("DELETE Blog Error:", error);

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