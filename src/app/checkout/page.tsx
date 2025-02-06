/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Product } from '../../../types/products';
import React, { useEffect, useState } from 'react';
import { getCartItems } from '../actions/actions';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";

export default function CheckOut() {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    });
  
    const [formErrors, setFormErrors] = useState({
      firstName: false,
      lastName: false,
      address: false,
      city: false,
      zipCode: false,
      phone: false,
      email: false,
    });
  
    useEffect(() => {
      setCartItems(getCartItems());
      const appliedDiscount = localStorage.getItem("appliedDiscount");
      if (appliedDiscount) {
        setDiscount(Number(appliedDiscount));
      }
    }, []);
  
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
    const total = Math.max(subtotal - discount, 0);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.id]: e.target.value,
      });
    };
  
    const validateForm = () => {
      const errors = {
        firstName: !formValues.firstName,
        lastName: !formValues.lastName,
        address: !formValues.address,
        city: !formValues.city,
        zipCode: !formValues.zipCode,
        phone: !formValues.phone,
        email: !formValues.email,
      };
      setFormErrors(errors);
      return Object.values(errors).every((error) => !error);
    };
  
    const handlePlaceOrder = () => {
      if (validateForm()) {
        localStorage.removeItem("appliedDiscount");
      //   toast.success("Order placed successfully!");
      } else {
      //   toast.error("Please fill in all the fields.");
      }
    };
  
    return (
        <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="mt-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 py-4">
              <Link
                href="/cart"
                className="text-gray-600 hover:text-black transition text-sm"
              >
                Cart
              </Link>
              <CgChevronRight className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-800">Checkout</span>
            </nav>
          </div>
        </div>
      
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-3 border-b border-gray-100"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      {item.imageUrl && (
                        <Image
                          src={urlFor(item.imageUrl).url()}
                          alt={item.productName}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.productName}</h3>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.inventory}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${item.price * item.inventory}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}
              <div className="text-right pt-4">
                <p className="text-sm text-gray-600">
                  Subtotal: <span className="font-medium text-gray-900">${subtotal}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Discount: <span className="font-medium text-gray-900">-${discount}</span>
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Total: ${total.toFixed(2)}
                </p>
              </div>
            </div>
      
            {/* Billing Form */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Billing Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {formErrors.firstName && (
                    <p className="mt-2 text-sm text-red-600">
                      First name is required.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {formErrors.lastName && (
                    <p className="mt-2 text-sm text-red-600">
                      Last name is required.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  id="address"
                  placeholder="Enter your address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formErrors.address && (
                  <p className="mt-2 text-sm text-red-600">Address is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  id="city"
                  placeholder="Enter your city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formErrors.city && (
                  <p className="mt-2 text-sm text-red-600">City is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  id="zipCode"
                  placeholder="Enter your zip code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formErrors.zipCode && (
                  <p className="mt-2 text-sm text-red-600">Zip Code is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formErrors.phone && (
                  <p className="mt-2 text-sm text-red-600">Phone is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-600">Email is required.</p>
                )}
              </div>
              <button
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
