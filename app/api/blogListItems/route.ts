// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // CREATE BLOG LIST ITEM

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const item = await prisma.blogListItem.create({
//       data: {
//         listId: body.listId,
//         itemText: body.itemText,
//       },
//     });

//     return NextResponse.json(item);
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

// // GET ALL BLOG LIST ITEMS

// export async function GET() {
//   try {
//     const items = await prisma.blogListItem.findMany({
//       include: {
//         list: true,
//       },
//     });

//     return NextResponse.json(items);
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
// CREATE BLOG LIST ITEM
// =========================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.listId) {
      return NextResponse.json(
        {
          error: "List is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!body.itemText?.trim()) {
      return NextResponse.json(
        {
          error: "Item text is required",
        },
        {
          status: 400,
        }
      );
    }

    const item = await prisma.blogListItem.create({
      data: {
        listId: Number(body.listId),

        itemText: body.itemText.trim(),
      },
    });

    return NextResponse.json(item, {
      status: 201,
    });
  } catch (error) {
    console.error("Create Blog List Item Error:", error);

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
// GET ALL BLOG LIST ITEMS
// =========================

export async function GET() {
  try {
    const items = await prisma.blogListItem.findMany({
      include: {
        list: {
          include: {
            blog: true,
            section: true,
          },
        },
      },

      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Get Blog List Items Error:", error);

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