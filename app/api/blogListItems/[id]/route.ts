import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET BY ID

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const item = await prisma.blogListItem.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        list: true,
      },
    });

    return NextResponse.json(item);
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

// UPDATE BLOG LIST ITEM

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const item = await prisma.blogListItem.update({
      where: {
        id: Number(id),
      },
      data: {
        listId: body.listId,
        itemText: body.itemText,
      },
    });

    return NextResponse.json(item);
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

// DELETE BLOG LIST ITEM

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const item = await prisma.blogListItem.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Blog list item deleted successfully",
      item,
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