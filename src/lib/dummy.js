"use server";
import axios from "axios";

export async function dummy() {
  const { data } = await axios.get("https://dummyjson.com/products?limit=10");
  return data.products;
}
