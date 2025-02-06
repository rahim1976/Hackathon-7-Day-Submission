"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags?: string[];
  imageUrl?: string;
  description: string;
  available: boolean;
  _createdAt: string;
}



const itemsPerPage = 9;

export default function ShopPage() {


  
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [latestProducts, setLatestProducts] = useState<FoodItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [tags, setTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("Newest");

  useEffect(() => {
    fetchFoodItems();
    fetchLatestProducts();
  }, []);

  const fetchFoodItems = () => {
    client
      .fetch(
        `*[_type == "food"]{
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "imageUrl": image.asset->url,
          description,
          available,
          _createdAt
        }`
      )
      .then((data) => {
        setFoodItems(data);
        const allTags: string[] = data.flatMap((item: FoodItem) => item.tags || []);
        setTags([...new Set(allTags)]); 
      })
      .catch(console.error);
  };

  const fetchLatestProducts = () => {
    client
      .fetch<FoodItem[]>(
        `*[_type == "food"] | order(_createdAt desc)[0...4]{
          _id,
          name,
          price,
          "imageUrl": image.asset->url
        }`
      )
      .then((data) => setLatestProducts(data))
      .catch(console.error);
  };

  const totalPages = Math.ceil(foodItems.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const sortedItems = [...foodItems].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.price - b.price;
    } else if (sortOption === "Price: High to Low") {
      return b.price - a.price;
    } else {
      return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
    }
  });

  const filteredItems = sortedItems.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? item.category === selectedCategory : true) &&
      item.price <= maxPrice
    );
  });

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Head>
        <title>Our Shop</title>
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
          <h1 className="text-3xl font-bold">Shop Page</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› Shop</span>
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <label className="mr-2">Sort By:</label>
              <select
                className="border border-gray-300 rounded p-2"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedItems.map((product) => (
              <Link
                key={product._id}
                href={`/shopdetail/${product._id}`}
                passHref
              >
                <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                  <div className="relative">
                    {product.tags &&
                      product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="absolute top-2 left-2 bg-[#FF9F0D] tracking-wide text-gray-800 font-bold text-md px-2 py-1  rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    <Image
                      alt={product.name || "Product Image"}
                      className="w-full h-96 object-center rounded-t-lg"
                      src={product.imageUrl || "https://placehold.co/300x300"}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      {product.name || "Unnamed Product"}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-[#FF9F0D] text-xl font-bold">
                        {product.price ? `$${product.price}` : "$0.00"}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through ml-2">
                          {`$${product.originalPrice}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`border border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center transition ${
                  currentPage === index + 1
                    ? "bg-[#FF9F0D] text-white hover:bg-orange-600"
                    : "text-[#FF9F0D] hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <input
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Search Product"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Filter by Price</h3>
              <input
                className="w-full mb-2"
                max="100"
                min="0"
                type="range"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="flex justify-between text-sm">
                <span>From $0</span>
                <span>to ${maxPrice}</span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Latest Products</h3>
              <div className="flex flex-col">
                {latestProducts.map((product) => (
                  <div key={product._id} className="flex items-center mb-2">
                    <Image
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded mr-2"
                      src={product.imageUrl || "/latest.jpg"}
                      height="50"
                      width="50"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">{product.name}</h4>
                      <span className="text-sm text-gray-500">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Product Tags</h3>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gray-700 px-2 py-1 text-sm mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}