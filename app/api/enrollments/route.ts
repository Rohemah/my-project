import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// CREATE ENROLLMENT

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const enrollment = await prisma.enrollment.create({
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

// GET ALL ENROLLMENTS

export async function GET() {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: {
        user: true,
        course: true,
      },
    });

    return NextResponse.json(enrollments);
  } catch (error) {
    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}