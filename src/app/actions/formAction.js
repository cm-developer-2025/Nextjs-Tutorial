"use server";

import { products } from "../lib/productdata";

// POST Request
export const handleForm = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");
  console.log("Username", username);
  console.log("Password", password);
  products.push({ productName: username, price: password });
  console.log("Products", products);
};

// GET Request
export const getProducts = async () => {
  return products;
};

export const nextFormHandle = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");
  console.log("Username", username);
  console.log("Password", password);
};
