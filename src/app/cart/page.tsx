"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to remove this item?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    const updatedCartItems = cartItems.map((item) =>
      item._id === id ? { ...item, inventory: quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((product) => product._id === id);
    if (product) {
      const newQuantity = product.inventory + 1;
      handleQuantityChange(id, newQuantity);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((product) => product._id === id);
    if (product && product.inventory > 1) {
      const newQuantity = product.inventory - 1;
      handleQuantityChange(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.inventory,
      0
    );
  };


  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "You will be redirected to the checkout page.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to checkout page
        Swal.fire(
          "Redirecting...",
          "You Order Has Been Successfully Assigned.",
          "success"
        );
        router.push("/checkout");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col gap-4">
        {cartItems.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-md flex items-center"
          >
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={100}
                height={100}
                className="mr-4"
              />
            )}

            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{product.productName}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleDecrement(product._id)}
                  className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4 bg-gray-100">{product.inventory}</span>
                <button
                  onClick={() => handleIncrement(product._id)}
                  className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(product._id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
        <button
          onClick={handleProceed}
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;