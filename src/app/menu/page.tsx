import React from "react";
import Head from "next/head";
import {
  FaHamburger,
  FaPizzaSlice,
  FaUser,
  FaUserCheck,
  FaUtensils,
} from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Our Menu</title>
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
          <h1 className="text-3xl font-bold">Our Menu</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› Menu</span>
          </p>
        </div>
      </div>
      {/* Starter Menu Start */}
      <div className="flex flex-col md:flex-row  items-center  md:items-start p-4 md:p-8">
        <div className="w-full  md:w-1/2 mb-4 md:mb-0  flex justify-center ">
          <img
            src="/menu10.jpg"
            alt="A bowl of salad with various vegetables and a fork on the side"
            className=" rounded-lg shadow-lg flex "
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8 flex flex-col md:pr-96 md:py-20 ">
          <FaUtensils className="text-[#FF9F0D] text-xl mr-2" />
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold">Starter Menu</h1>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">
                  Alder Grilled Chinook Salmon
                </h2>
                <p className="text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">32$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold text-[#FF9F0D]">
                  Berries and creme tart
                </h2>
                <p className="text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400">700 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">43$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">
                  Tormentoso Bush Pizza Pintoage
                </h2>
                <p className="text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400">1000 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">14$</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Spicy Vegan Potato Curry</h2>
                <p className="text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">35$</div>
            </div>
          </div>
        </div>
      </div>
      {/* Starter Menu End */}

      {/* Main Course Start */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 ">
        <div className="w-full md:w-1/2 md:pr-8 flex flex-col  md:pl-96 md:py-20">
          <FaUtensils className="text-[#FF9F0D] text-xl mr-2 " />
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold">Main Course</h1>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">
                  Optic Big Breakfast Combo Menu
                </h2>
                <p className="text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">32$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold text-[#FF9F0D]">
                  Cashew Chicken With Stir-Fry
                </h2>
                <p className="text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400">700 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">43$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">Vegetables & Green Salad</h2>
                <p className="text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400">1000 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">14$</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Spicy Vegan Potato Curry</h2>
                <p className="text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">35$</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center ">
          <img
            src="/menu11.jpg"
            alt="A bowl of salad with various vegetables and a fork on the side"
            className="rounded-lg shadow-lg flex"
          />
        </div>
      </div>
      {/* Main Course End */}

      <div
        className="flex justify-center items-center bg-black bg-opacity-70 py-16 relative"
        style={{
          backgroundImage: "url('/menubg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          <div className="flex flex-col items-center">
            <FaUser className="text-6xl text-yellow-500 mb-4" />
            <h2 className="text-4xl font-bold">420</h2>
            <p className="text-lg">Professional Chefs</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHamburger className="text-6xl text-yellow-500 mb-4" />
            <h2 className="text-4xl font-bold">320</h2>
            <p className="text-lg">Items Of Food</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUtensils className="text-6xl text-yellow-500 mb-4" />
            <h2 className="text-4xl font-bold">30+</h2>
            <p className="text-lg">Years Of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPizzaSlice className="text-6xl text-yellow-500 mb-4" />
            <h2 className="text-4xl font-bold">220</h2>
            <p className="text-lg">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Desart Menu Start */}
      <div className="flex flex-col md:flex-row  items-center  md:items-start p-4 md:p-8">
        <div className="w-full  md:w-1/2 mb-4 md:mb-0  flex justify-center ">
          <img
            src="/menu12.jpg"
            alt="A bowl of salad with various vegetables and a fork on the side"
            className=" rounded-lg shadow-lg flex "
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8 flex flex-col md:pr-96 md:py-20 ">
          <FaUtensils className="text-[#FF9F0D] text-xl mr-2" />
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold">Desart</h1>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">Fig & Lemon Cake</h2>
                <p className="text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">32$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold text-[#FF9F0D]">
                  Creamy Mascarpone cake
                </h2>
                <p className="text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400">700 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">43$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">
                  Pastr, Blueberries, Lemon Juice
                </h2>
                <p className="text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400">1000 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">14$</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Pain Au Chocolate</h2>
                <p className="text-gray-500">
                  Spreadable cream Cheese, Crumbled blue cheese
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">35$</div>
            </div>
          </div>
        </div>
      </div>
      {/* Desart Menu End */}

      {/* Drink Menu Start */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 ">
        <div className="w-full md:w-1/2 md:pr-8 flex flex-col  md:pl-96 md:py-20">
          <FaUtensils className="text-[#FF9F0D] text-xl mr-2 " />
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold">Drinks</h1>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">Caffe Maccihiato</h2>
                <p className="text-gray-500">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">32$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold text-[#FF9F0D]">
                  Aperol Spritz Capacianno
                </h2>
                <p className="text-gray-500">
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className="text-gray-400">700 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">43$</div>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-xl font-bold">Caffe Latte Compuri</h2>
                <p className="text-gray-500">
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className="text-gray-400">1000 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">14$</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  Tormentoso BushTea Pintoage
                </h2>
                <p className="text-gray-500">
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className="text-gray-400">560 CAL</p>
              </div>
              <div className="text-[#FF9F0D] text-xl font-bold">35$</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center ">
          <img
            src="/menu13.jpg"
            alt="A bowl of salad with various vegetables and a fork on the side"
            className="rounded-lg shadow-lg flex"
          />
        </div>
      </div>
      {/* Drink Menu End */}

      <div className="text-center py-10">
        <h2 className="text-sm text-gray-500">Partners & Clients</h2>
        <h1 className="text-3xl font-bold text-gray-800 my-4">
          We work with the best people
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-8 mt-8">
          <img
            src="/menu14.jpg"
            alt="Restaurant logo"
            className="h-16 md:h-20"
          />
          <img src="/menu15.jpg" alt="Bakery logo" className="h-16 md:h-20" />
          <img
            src="/menu16.jpg"
            alt="Fork & Spoon logo"
            className="h-16 md:h-20"
          />
          <img
            src="/menu17.jpg"
            alt="Wolf Coffee logo"
            className="h-16 md:h-20"
          />
          <img src="/menu18.jpg" alt="Bistro logo" className="h-16 md:h-20" />
          <img src="/menu19.jpg" alt="Bakery logo" className="h-16 md:h-20" />
        </div>
      </div>
    </div>
  );
};

export default Page;
