import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const course = await prisma.course.findUnique({
      where: {
        slug: slug,
      },
     include: {
  category: true,

  descriptions: true,

  features: true,

  highlightInfo: true,

  highlights: true,

  modules: {
    include: {
      topics: true,
    },
  },

  courseInstructors: {
    include: {
      instructor: {
        include: {
          skills: true,
        },
      },
    },
  },
},
    });

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
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