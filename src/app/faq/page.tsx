"use client";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageData {
  title: string;
  faqs: FAQ[];
}

const FAQPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    client
      .fetch<FAQPageData[]>(
        `*[_type == "faqPage"]{
          title,
          faqs[]{
            question,
            answer
          }
        }`
      )
      .then((data) => {
        // Flatten the array of FAQ pages into a single array of FAQs
        const allFaqs = data.flatMap((page) => page.faqs);
        setFaqs(allFaqs);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <Head>
        <title>FAQ Page</title>
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
          <h1 className="text-3xl font-bold">FAQ Page</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› FAQ</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-2">Questions Look Here</h1>
        <p className="text-center mb-10 max-w-2xl">
          Find answers to the most frequently asked questions about our services
          and offerings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold">{faq.question}</h2>
                <i className="fas fa-plus"></i>
              </div>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
