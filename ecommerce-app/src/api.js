import axios from "axios";

const API_BASE = "http://localhost:8080/products";

// Fetch products with optional search query
export const fetchProducts = async (search = "") => {
  try {
    const response = await axios.get(`${API_BASE}${search ? `?search=${search}` : ""}`);
    console.log("...",response);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
