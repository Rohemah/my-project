// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";


// // CREATE BLOG SECTION

// export async function POST(request:Request){

// try{

// const body = await request.json();


// const section = await prisma.blogSection.create({

// data:{
// blogId: body.blogId,
// heading: body.heading,
// paragraph: body.paragraph,
// displayOrder: body.displayOrder
// }

// });


// return NextResponse.json(section);


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




// // GET ALL BLOG SECTIONS

// export async function GET(){

// try{


// const sections = await prisma.blogSection.findMany({

// include:{
// blog:true
// }

// });


// return NextResponse.json(sections);


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

// // GET ALL BLOG SECTIONS
// export async function GET() {
//   try {
//     const sections = await prisma.blogSection.findMany({
//       include: {
//         blog: true,
//       },
//       orderBy: {
//         displayOrder: "asc",
//       },
//     });

//     return NextResponse.json(sections);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { error: "Failed to fetch blog sections" },
//       { status: 500 }
//     );
//   }
// }

// // CREATE BLOG SECTION
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const section = await prisma.blogSection.create({
//       data: {
//         blogId: Number(body.blogId),
//         heading: body.heading || null,
//         paragraph: body.paragraph || null,
//         image: body.image || null,
//         video: body.video || null,
//         displayOrder: Number(body.displayOrder),
//       },
//     });

//     return NextResponse.json(section, { status: 201 });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { error: "Failed to create blog section" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ========================================
// GET ALL BLOG SECTIONS
// ========================================

export async function GET() {
  try {
    const sections = await prisma.blogSection.findMany({
      include: {
        blog: true,
      },

      orderBy: {
        displayOrder: "asc",
      },
    });

    return NextResponse.json(sections);
  } catch (error) {
    console.error("GET Blog Sections Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch blog sections",
      },
      {
        status: 500,
      }
    );
  }
}

// ========================================
// CREATE BLOG SECTION
// ========================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ========================================
    // VALIDATE BLOG
    // ========================================

    if (!body.blogId) {
      return NextResponse.json(
        {
          error: "Blog is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================
    // VALIDATE HEADING
    // ========================================

    if (!body.heading?.trim()) {
      return NextResponse.json(
        {
          error: "Heading is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================
    // VALIDATE PARAGRAPH
    // ========================================

    if (!body.paragraph?.trim()) {
      return NextResponse.json(
        {
          error: "Paragraph is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================
    // CREATE BLOG SECTION
    // ========================================

    const section = await prisma.blogSection.create({
      data: {
        blogId: Number(body.blogId),

        heading: body.heading.trim(),

        paragraph: body.paragraph.trim(),

        displayOrder: Number(body.displayOrder) || 0,
      },
    });

    return NextResponse.json(section, {
      status: 201,
    });
  } catch (error) {
    console.error("CREATE Blog Section Error:", error);

    return NextResponse.json(
      {
        error: "Failed to create blog section",
      },
      {
        status: 500,
      }
    );
  }
}