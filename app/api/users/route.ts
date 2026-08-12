import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


// ==========================
// CREATE USER
// ==========================

export async function POST(request: Request) {

    try {


        const body = await request.json();



        const passwordHash = await bcrypt.hash(
            body.password,
            10
        );



        const user = await prisma.user.create({

            data: {

                fullName: body.fullName,

                email: body.email,

                passwordHash: passwordHash,

                role: body.role || "STUDENT",

            },

        });



        return NextResponse.json(user);



    } catch (error) {


        return NextResponse.json(

            {
                error: String(error),
            },

            {
                status:500,
            }

        );


    }

}





// ==========================
// GET ALL USERS
// ==========================


export async function GET() {


    try {


        const users = await prisma.user.findMany({


            include: {


                enrollments: true,


            },


            orderBy:{


                createdAt:"desc"


            }


        });




        return NextResponse.json(users);




    } catch(error) {


        return NextResponse.json(

            {

                error:String(error),

            },

            {

                status:500,

            }

        );


    }


}