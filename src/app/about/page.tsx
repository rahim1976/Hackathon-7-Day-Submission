"use client";
import { client } from "@/sanity/lib/client";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaHatCowboy,
  FaLeaf,
  FaPlay,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl?: string;
  description: string;
  available: boolean;
}

const aboutPage = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "chef"] | order(_createdAt desc) [0...4]{
           _id,
           name,
           position,
           experience,
           specialty,
           "imageUrl": image.asset->url,
           description,
           available
         }`
      )
      .then((data) => setChefs(data))
      .catch(console.error);
  }, []);

  // const page = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
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
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-[#FF9F0D]">› About</span>
          </p>
        </div>
      </div>

      <div className="bg-white text-gray-800">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 px-2">
              <div className="col-span-1">
                <img
                  src="/about4.jpg"
                  alt="Tacos with lime"
                  className="w-full h-86 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="col-span-1 grid grid-cols-1 gap-4">
                <img
                  src="/about5.jpg"
                  alt="Fried food with dip"
                  className="w-full h-74 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/about6.jpg"
                  alt="Salad with orange juice"
                  className="w-full h-74 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center p-4">
              <h2
                className="text-sm text-[#FF9F0D] mb-2"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                About us
              </h2>
              <h1 className="text-3xl font-bold">
                Food is an important part of a balanced diet
              </h1>
              <p className="text-gray-600 mb-4">
                Eating a variety of foods ensures you get the nutrients your
                body needs. A balanced diet includes a mix of fruits,
                vegetables, proteins, and grains. It's important to enjoy your
                meals and make healthy choices to maintain overall well-being.
              </p>
              <div className="mt-6 flex ">
                <button className=" border bg-[#FF9F0D] border-[#FF9F0D] text-white px-6  hover:bg-white  hover:text-black py-4 rounded-lg   transition duration-300">
                  Show More
                </button>
                <button className=" text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:text-black hover:bg-[#FF9F0D] transition duration-300">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#FF9F0D] rounded-full">
                    <FaPlay className="text-white" />
                  </div>
                  <span className="font-bold">Watch Video</span>
                </button>
              </div>
            </div>
          </div>

          <section className="text-center py-12">
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-gray-600 mt-2">
              We are committed to providing exceptional service and high-quality
              food. Our team of experienced chefs uses only the freshest
              ingredients to create delicious and nutritious meals. We
              prioritize customer satisfaction and strive to create a welcoming
              and enjoyable dining experience for all our guests.
            </p>
            <div className="mt-8">
              <img
                src="/about7.jpg"
                alt="Delicious food dishes"
                className="w-full h-auto"
              />
            </div>
          </section>
          <section className="text-center py-12">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <FaHatCowboy className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold">Best Chef</h3>
                <p className="text-gray-600 mt-2">
                  Our chefs are highly skilled and have years of experience in
                  creating delicious and innovative dishes. They are dedicated
                  to using the freshest ingredients and cooking techniques to
                  provide you with an unforgettable dining experience.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaUtensils className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold">120 Item Food</h3>
                <p className="text-gray-600 mt-2">
                  We offer a diverse menu with over 120 items, including
                  appetizers, main courses, desserts, and beverages. Our menu is
                  designed to cater to all tastes and preferences, ensuring that
                  there is something for everyone to enjoy.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaLeaf className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold">Clean Environment</h3>
                <p className="text-gray-600 mt-2">
                  We prioritize maintaining a clean and hygienic environment to
                  ensure the safety and well-being of our customers. Our team
                  follows strict sanitation protocols to provide a pleasant
                  dining experience.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-[#FF9F0D] text-white text-center p-12">
            <h2 className="text-3xl font-bold">Team Member</h2>
            <p className="mt-2">
              Welcome to our website! We are dedicated to providing the best
              products and services to our customers. Our team works tirelessly
              to ensure that you have a seamless and enjoyable experience. We
              believe in quality, integrity, and customer satisfaction. Thank
              you for choosing us!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
              {chefs.map((chef) => (
                <div
                  key={chef._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <Image
                    src={chef.imageUrl || "/placeholder.jpg"}
                    alt={chef.name}
                    className="w-full h-96 object-cover"
                    width={640}
                    height={480}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold">{chef.name}</h2>
                    <p className="text-gray-600">{chef.position}</p>
                    <p className="text-gray-600">{chef.specialty}</p>
                    <p className="text-gray-600">
                      {chef.experience} years of experience
                    </p>
                    <p className="text-gray-600">{chef.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="container mx-auto px-4 py-8">
            <section className="text-center mb-16">
              <h2
                className="testimonial-title text-4xl"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Testimonials
              </h2>
              <h3 className="text-3xl font-bold mt-2">
                What our client are saying
              </h3>
              <div className="mt-8 flex justify-center">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl">
                  <img
                    src="/client1.jpg"
                    alt="Client photo"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <div className="text-yellow-500 text-4xl mb-4">99</div>
                  <p className="text-gray-600 mb-4">
                    "I have been a customer for several years and I am always
                    impressed with the quality of products and services
                    provided. The team is incredibly responsive and always goes
                    above and beyond to ensure my satisfaction. I highly
                    recommend this company to anyone looking for top-notch
                    service and products. Thank you for your dedication and hard
                    work!"
                  </p>
                  <div className="flex justify-center items-center mb-4">
                    <FaStar className="text-[#FF9F0D] text-2xl" />
                    <FaStar className="text-[#FF9F0D] text-2xl" />
                    <FaStar className="text-[#FF9F0D] text-2xl" />
                    <FaStar className="text-[#FF9F0D] text-2xl" />
                    <FaStar className="text-gray-500 text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold">Alamin Hasan</h4>
                  <p className="text-gray-500">Food Specialist</p>
                  <div className="flex justify-center mt-4">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center px-4">
            <h2 className="food-menu-title text-4xl font-bold">
  Our Food Menu
</h2>
<p className="text-gray-600 mt-2 mb-6">
  Explore our diverse and delicious food menu, crafted with the finest ingredients to satisfy every palate. From appetizers to main courses and desserts, our menu offers a wide variety of options to choose from. Whether you're in the mood for something light and healthy or indulgent and hearty, we have something for everyone. Enjoy a culinary experience like no other!
</p>
              <div className="mt-8">
                <nav className="flex flex-wrap justify-center space-x-4 text-lg border-b gap-8">
                  <a
                    href="#"
                    className="text-[#FF9F0D] border-b-2 border-[#FF9F0D] pb-1"
                  >
                    Breakfast
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                  >
                    Lunch
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                  >
                    Dinner
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                  >
                    Dessert
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                  >
                    Drink
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                  >
                    Snack
                  </a>
                </nav>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Array.from({ length: 6 }, (_, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between items-start border-b py-4"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#FF9F0D]">
                          Alder Grilled Chinook Salmon
                        </h4>
                        <p className="text-gray-600">
                          Toasted French bread topped with romano, cheddar
                        </p>
                        <p className="text-gray-400">560 CAL</p>
                      </div>
                      <div className="text-2xl font-bold text-[#FF9F0D] mt-2">
                        32$
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-8 px-6 py-2 bg-[#FF9F0D] text-white rounded-full hover:bg-[#e68a00] transition duration-300">
                  View Menu
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
