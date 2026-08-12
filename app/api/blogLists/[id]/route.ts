// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // GET BY ID

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const blogList = await prisma.blogList.findUnique({
//       where: {
//         id: Number(id),
//       },
//       include: {
//         blog: true,
//         items: true,
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

// // UPDATE BLOG LIST

// export async function PUT(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;
//     const body = await request.json();

//     const blogList = await prisma.blogList.update({
//       where: {
//         id: Number(id),
//       },
//       data: {
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

// // DELETE BLOG LIST

// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const blogList = await prisma.blogList.delete({
//       where: {
//         id: Number(id),
//       },
//     });

//     return NextResponse.json({
//       message: "Blog list deleted successfully",
//       blogList,
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
// GET BLOG LIST BY ID
// =========================

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blogList = await prisma.blogList.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        blog: true,
        section: true,
        items: true,
      },
    });

    if (!blogList) {
      return NextResponse.json(
        {
          error: "Blog list not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(blogList);
  } catch (error) {
    console.error("GET Blog List Error:", error);

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
// UPDATE BLOG LIST
// =========================

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

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

    if (!body.listHeading?.trim()) {
      return NextResponse.json(
        {
          error: "List heading is required",
        },
        {
          status: 400,
        }
      );
    }

    const blogList = await prisma.blogList.update({
      where: {
        id: Number(id),
      },

      data: {
        blogId: Number(body.blogId),

        sectionId: body.sectionId
          ? Number(body.sectionId)
          : null,

        listHeading: body.listHeading.trim(),

        listParagraph:
          body.listParagraph?.trim() || null,
      },
    });

    return NextResponse.json(blogList);
  } catch (error) {
    console.error("UPDATE Blog List Error:", error);

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
// DELETE BLOG LIST
// =========================

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blogListId = Number(id);

    // Check Blog List
    const existingList = await prisma.blogList.findUnique({
      where: {
        id: blogListId,
      },

      include: {
        items: true,
      },
    });

    if (!existingList) {
      return NextResponse.json(
        {
          error: "Blog list not found",
        },
        {
          status: 404,
        }
      );
    }

    // =========================
    // DELETE LIST ITEMS FIRST
    // =========================

    await prisma.blogListItem.deleteMany({
      where: {
        listId: blogListId,
      },
    });

    // =========================
    // DELETE BLOG LIST
    // =========================

    const blogList = await prisma.blogList.delete({
      where: {
        id: blogListId,
      },
    });

    return NextResponse.json({
      message: "Blog list deleted successfully",

      blogList,
    });
  } catch (error) {
    console.error("DELETE Blog List Error:", error);

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