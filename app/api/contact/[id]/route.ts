import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const contactId = Number(id);

    if (isNaN(contactId)) {
      return NextResponse.json(
        { error: "Invalid contact ID" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.findUnique({
      where: {
        id: contactId,
      },
    });

    if (!contact) {
      return NextResponse.json(
        { error: "Contact message not found" },
        { status: 404 }
      );
    }

    await prisma.contact.delete({
      where: {
        id: contactId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Contact message deleted successfully",
    });
  } catch (error) {
    console.error("Delete Contact Error:", error);

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