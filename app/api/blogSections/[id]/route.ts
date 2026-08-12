// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";



// // GET BY ID

// export async function GET(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{

// const {id}=await params;


// const section = await prisma.blogSection.findUnique({

// where:{
// id:Number(id)
// },

// include:{
// blog:true
// }

// });


// return NextResponse.json(section);


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }







// // UPDATE BLOG SECTION

// export async function PUT(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{


// const {id}=await params;


// const body = await request.json();


// const section = await prisma.blogSection.update({

// where:{
// id:Number(id)
// },

// data:{
// heading:body.heading,
// paragraph:body.paragraph,
// displayOrder:body.displayOrder
// }

// });


// return NextResponse.json(section);


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }







// // DELETE BLOG SECTION

// export async function DELETE(
// request:Request,
// {params}:{params:Promise<{id:string}>}
// ){

// try{


// const {id}=await params;


// const section = await prisma.blogSection.delete({

// where:{
// id:Number(id)
// }

// });


// return NextResponse.json({

// message:"Blog section deleted successfully",

// section

// });


// }catch(error){

// return NextResponse.json(
// {
// error:String(error)
// },
// {
// status:500
// }
// );

// }

// }

// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// // ========================================
// // GET BLOG SECTION BY ID
// // ========================================

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const section = await prisma.blogSection.findUnique({
//       where: {
//         id: Number(id),
//       },
//       include: {
//         blog: true,
//       },
//     });

//     if (!section) {
//       return NextResponse.json(
//         {
//           error: "Blog section not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     return NextResponse.json(section);
//   } catch (error) {
//     console.error("GET Blog Section Error:", error);

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

// // ========================================
// // UPDATE BLOG SECTION
// // ========================================

// export async function PUT(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const body = await request.json();

//     const section = await prisma.blogSection.update({
//       where: {
//         id: Number(id),
//       },

//       data: {
//         blogId: Number(body.blogId),
//         heading: body.heading || null,
//         paragraph: body.paragraph || null,

//         // IMPORTANT
//         // Save image URL
//         image: body.image || null,

//         // IMPORTANT
//         // Save video URL
//         video: body.video || null,

//         displayOrder: Number(body.displayOrder),
//       },
//     });

//     return NextResponse.json(section);
//   } catch (error) {
//     console.error("UPDATE Blog Section Error:", error);

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

// // ========================================
// // DELETE BLOG SECTION
// // ========================================

// export async function DELETE(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await params;

//     const section = await prisma.blogSection.delete({
//       where: {
//         id: Number(id),
//       },
//     });

//     return NextResponse.json({
//       message: "Blog section deleted successfully",
//       section,
//     });
//   } catch (error) {
//     console.error("DELETE Blog Section Error:", error);

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

// ========================================
// GET BLOG SECTION BY ID
// ========================================

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const section = await prisma.blogSection.findUnique({
      where: {
        id: Number(id),
      },

      include: {
        blog: true,
      },
    });

    if (!section) {
      return NextResponse.json(
        {
          error: "Blog section not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(section);
  } catch (error) {
    console.error("GET Blog Section Error:", error);

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

// ========================================
// UPDATE BLOG SECTION
// ========================================

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await request.json();

    // ========================================
    // VALIDATION
    // ========================================

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

    if (!body.heading?.trim()) {
      return NextResponse.json(
        {
          error: "Heading is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!body.paragraph?.trim()) {
      return NextResponse.json(
        {
          error: "Paragraph is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================
    // UPDATE BLOG SECTION
    // ========================================

    const section = await prisma.blogSection.update({
      where: {
        id: Number(id),
      },

      data: {
        blogId: Number(body.blogId),

        heading: body.heading.trim(),

        paragraph: body.paragraph.trim(),

        displayOrder: Number(body.displayOrder),
      },
    });

    return NextResponse.json(section);
  } catch (error) {
    console.error("UPDATE Blog Section Error:", error);

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

// ========================================
// DELETE BLOG SECTION
// ========================================

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const section = await prisma.blogSection.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Blog section deleted successfully",
      section,
    });
  } catch (error) {
    console.error("DELETE Blog Section Error:", error);

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