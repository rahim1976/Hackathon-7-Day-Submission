"use client";
import React from "react";
import { remove } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  _id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Cartpage: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);
  
    const handleRemove = (e: React.MouseEvent, id: number) => {
      e.preventDefault();
      dispatch(remove(id));
    };
  
    return (
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
        <div className="space-y-6">
          {cartItems.map((product: CartItem) => (
            <div key={product._id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24">
                  <Image
                    alt={product.name || "Product Image"}
                    className="object-cover rounded"
                    src={product.imageUrl || "https://placehold.co/300x300"}
                    fill
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-[#FF9F0D] text-xl font-bold">
                    ${product.price}
                  </span>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  onClick={(e) => handleRemove(e, product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Cartpage;
