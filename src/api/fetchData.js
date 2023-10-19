import axios from "axios";

const baseUrl = "https://dummyjson.com/products/category/";

export const fetchProducts = async (category) => {
  const url = baseUrl + category;

  try {
    const response = await axios.get(url);
    return response.data.products || [];
  } catch (error) {
    throw new Error("Error fetching data. Please try again.");
  }
};
