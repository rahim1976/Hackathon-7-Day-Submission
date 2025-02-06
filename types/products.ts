import { TypedObject } from "@portabletext/types";

export interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl?: string;
  description: string;
  longDescription?: TypedObject[];
  available: boolean;
  inventory: number;
  quantity: number;
  //   length: any;
  //   reduce(arg0: (sum: any, order: any) => any, arg1: number): unknown;
  //   _type: "product";
  //   image?: {
  //     _type: "image";
  //     asset: {
  //       _type: "reference";
  //       _ref: string;
  //     };
  //   };
}
// _id: string;
//   name: string;
//   category: string;
//   price: number;
//   originalPrice?: number;
//   tags?: string[];
//   imageUrl?: string;
//   description: string;
//   longDescription?: TypedObject[];
//   available: boolean;
