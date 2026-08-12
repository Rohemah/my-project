// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params;

//   try {
//     const blog = await prisma.blog.findUnique({
//       where: {
//         slug,
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
//         { error: "Blog not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(blog);
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params;

//   try {
//     const blog = await prisma.blog.findUnique({
//       where: {
//         slug,
//       },

//       include: {
//         // =========================
//         // CATEGORY
//         // =========================
//         category: true,

//         // =========================
//         // BLOG SECTIONS
//         // =========================
//         sections: {
//           orderBy: {
//             displayOrder: "asc",
//           },

//           include: {
//             // =========================
//             // LISTS INSIDE THIS SECTION
//             // =========================
//             lists: {
//               include: {
//                 items: true,
//               },
//             },
//           },
//         },

//         // =========================
//         // BLOG LISTS
//         // =========================
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
//     console.error("Blog By Slug Error:", error);

//     return NextResponse.json(
//       {
//         error: "Internal Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const blog = await prisma.blog.findUnique({
      where: {
        slug,
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

    // =========================
    // BLOG NOT FOUND
    // =========================
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

    // =========================
    // SUCCESS
    // =========================
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Blog By Slug Error:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
