import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =====================================================
// CREATE CONTACT MESSAGE
// =====================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() || null,
        message: message.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

// =====================================================
// GET ALL CONTACT MESSAGES
// =====================================================

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Get Contact Messages Error:", error);

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