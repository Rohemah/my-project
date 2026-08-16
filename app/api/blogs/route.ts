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
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";


// // CREATE BLOG

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const blog = await prisma.blog.create({
//       data: {
//         categoryId: Number(body.categoryId),

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


// // GET ALL BLOGS

// export async function GET() {
//   try {

//     const blogs = await prisma.blog.findMany({
//       include: {
//         category: true,
//       },
//     });

//     return NextResponse.json(blogs);

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
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // =========================
// // CREATE BLOG
// // =========================

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     // =========================
//     // VALIDATION
//     // =========================

//     if (!body.categoryId) {
//       return NextResponse.json(
//         {
//           error: "Category is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     if (!body.title?.trim()) {
//       return NextResponse.json(
//         {
//           error: "Title is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     if (!body.slug?.trim()) {
//       return NextResponse.json(
//         {
//           error: "Slug is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     if (!body.author?.trim()) {
//       return NextResponse.json(
//         {
//           error: "Author is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     if (!body.date) {
//       return NextResponse.json(
//         {
//           error: "Date is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     // =========================
//     // CREATE BLOG
//     // =========================

//     const blog = await prisma.blog.create({
//       data: {
//         categoryId: Number(body.categoryId),

//         title: body.title.trim(),

//         slug: body.slug.trim(),

//         // =========================
//         // AUTHOR
//         // =========================
//         author: body.author.trim(),

//         // =========================
//         // DATE
//         // =========================
//         date: new Date(body.date),

//         // =========================
//         // IMAGES
//         // =========================
//         image: body.image || null,

//         image2: body.image2 || null,

//         // =========================
//         // VIDEO
//         // =========================
//         video: body.video || null,

//         // =========================
//         // ARTICLES
//         // =========================
//         articleOne: body.articleOne || null,

//         articleTwo: body.articleTwo || null,
//       },
//     });

//     return NextResponse.json(blog, {
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Create Blog Error:", error);

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

// // =========================
// // GET ALL BLOGS
// // =========================

// export async function GET() {
//   try {
//     const blogs = await prisma.blog.findMany({
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

//       orderBy: {
//         id: "desc",
//       },
//     });

//     return NextResponse.json(blogs);
//   } catch (error) {
//     console.error("Get Blogs Error:", error);

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

// =====================================================
// CREATE BLOG
// =====================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // =====================================================
    // VALIDATION
    // =====================================================

    if (!body.categoryId) {
      return NextResponse.json(
        { error: "Category is required" },
        { status: 400 }
      );
    }

    if (!body.title?.trim()) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!body.slug?.trim()) {
      return NextResponse.json(
        { error: "Slug is required" },
        { status: 400 }
      );
    }

    if (!body.author?.trim()) {
      return NextResponse.json(
        { error: "Author is required" },
        { status: 400 }
      );
    }

    if (!body.date) {
      return NextResponse.json(
        { error: "Date is required" },
        { status: 400 }
      );
    }

    // =====================================================
    // CREATE BLOG
    // =====================================================

    const blog = await prisma.blog.create({
      data: {
        categoryId: Number(body.categoryId),

        title: body.title.trim(),

        slug: body.slug.trim(),

        // =================================================
        // AUTHOR
        // =================================================

        author: body.author.trim(),

        authorRole: body.authorRole?.trim() || null,

        authorImage: body.authorImage?.trim() || null,

        authorLink: body.authorLink?.trim() || null,

        // =================================================
        // DATE
        // =================================================

        date: new Date(body.date),

        // =================================================
        // BLOG IMAGE
        // =================================================

        image: body.image?.trim() || null,

        // =================================================
        // ARTICLES
        // =================================================

        articleOne: body.articleOne?.trim() || null,

        articleTwo: body.articleTwo?.trim() || null,
      },
    });

    return NextResponse.json(blog, {
      status: 201,
    });
  } catch (error) {
    console.error("Create Blog Error:", error);

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

// =====================================================
// GET ALL BLOGS
// =====================================================

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        // =================================================
        // CATEGORY
        // =================================================

        category: true,

        // =================================================
        // BLOG SECTIONS
        // =================================================

        sections: {
          orderBy: {
            displayOrder: "asc",
          },
        },

        // =================================================
        // BLOG LISTS
        // =================================================

        lists: {
          include: {
            items: true,
          },
        },
      },

      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Get Blogs Error:", error);

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