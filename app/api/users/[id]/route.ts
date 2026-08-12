import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET USER BY ID

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        enrollments: true,
      },
    });

    return NextResponse.json(user);
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

// UPDATE USER

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        passwordHash: body.passwordHash,
        role: body.role,
      },
    });

    return NextResponse.json(user);
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

// DELETE USER

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "User deleted successfully",
      user,
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