// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // CREATE BLOG LIST

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const blogList = await prisma.blogList.create({
//       data: {
//         blogId: body.blogId,
//         listHeading: body.listHeading,
//         listParagraph: body.listParagraph,
//       },
//     });

//     return NextResponse.json(blogList);
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

// // GET ALL BLOG LISTS

// export async function GET() {
//   try {
//     const blogLists = await prisma.blogList.findMany({
//       include: {
//         blog: true,
//         items: true,
//       },
//     });

//     return NextResponse.json(blogLists);
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


// CREATE BLOG LIST

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const blogList = await prisma.blogList.create({
      data: {
        blogId: Number(body.blogId),

        sectionId: body.sectionId
          ? Number(body.sectionId)
          : null,

        listHeading: body.listHeading,

        listParagraph:
          body.listParagraph || null,
      },
    });

    return NextResponse.json(blogList, {
      status: 201,
    });

  } catch (error) {
    console.error("Create Blog List Error:", error);

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


// GET ALL BLOG LISTS

export async function GET() {
  try {
    const blogLists = await prisma.blogList.findMany({

      include: {
        blog: true,

        section: true,

        items: true,
      },

      orderBy: {
        id: "asc",
      },

    });

    return NextResponse.json(blogLists);

  } catch (error) {
    console.error("Get Blog Lists Error:", error);

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