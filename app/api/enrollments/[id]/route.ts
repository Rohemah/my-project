import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET ENROLLMENT BY ID

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const enrollment = await prisma.enrollment.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
        course: true,
      },
    });

    return NextResponse.json(enrollment);
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// UPDATE ENROLLMENT

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const enrollment = await prisma.enrollment.update({
      where: {
        id: Number(id),
      },
      data: {
        userId: body.userId,
        courseId: body.courseId,
        status: body.status,
      },
    });

    return NextResponse.json(enrollment);
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}

// DELETE ENROLLMENT

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const enrollment = await prisma.enrollment.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Enrollment deleted successfully",
      enrollment,
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}