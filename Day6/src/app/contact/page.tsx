import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
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
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› Contact</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Name"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaPhone className="text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <textarea
                placeholder="Message"
                className="w-full focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9F0D] text-white py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;