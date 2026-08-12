import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(){

    try{


        const courses =
        await prisma.course.count();


        const categories =
        await prisma.category.count();


        const blogs =
        await prisma.blog.count();


        const users =
        await prisma.user.count();


        const enrollments =
        await prisma.enrollment.count();



        return NextResponse.json({

            courses,

            categories,

            blogs,

            users,

            enrollments,

            revenue:0

        });


    }
    catch(error){


        console.log(error);


        return NextResponse.json(

            {
                error:"Dashboard API Error"
            },

            {
                status:500
            }

        );


    }

}