import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Head>
        <title>Our SignIn</title>
      </Head>
      <div className="relative">
        <Image
          src="/navbarbg.jpg"
          alt="Fresh vegetables with dark background"
          className="w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">SignIn Page</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› SignIn</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUser className="text-gray-400 mr-3" />

              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaLock className="text-gray-400 mr-3" />

              <input
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember me?
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9F0D] text-white py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-500">
              Forget password?
            </a>
          </div>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md mb-2">
            <img src="/google.jpg" alt="Google logo" className="mr-2" />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md">
            <img src="/apple.jpg" alt="Apple logo" className="mr-2" />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
