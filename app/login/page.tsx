"use client";

import "./login.css";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const router = useRouter();


   async function handleLogin(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();


    const formData = new FormData(e.currentTarget);


    const email = formData.get("email");
    const password = formData.get("password");



    const result = await signIn("credentials", {

        email,
        password,
        redirect:false,

    });



    console.log(result);



    if(result?.ok){

        router.push("/admin");

    }
    else{

        alert("Invalid email or password");

    }

}


    return (

        <div className="login-container">


            <div className="login-card">


                <h1>
                    Admin Login
                </h1>


                <p>
                    Login to access dashboard
                </p>



                <form
                className="login-form"
                onSubmit={handleLogin}
                >


                    <input

                    name="email"

                    type="email"

                    placeholder="Enter email"

                    required

                    />


                    <input

                    name="password"

                    type="password"

                    placeholder="Enter password"

                    required

                    />


                    <button type="submit">

                        Login

                    </button>


                </form>


            </div>


        </div>

    );

}