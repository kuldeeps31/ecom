import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import { toast } from "react-toastify";
import ProductCard from "../component/productCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await fetchProducts(search);
      setProducts(data);
    } catch (err) {
      toast.error("Failed to fetch products 😓");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-wide">
        🛒 Product Search
      </h1>

      <input
        type="text"
        placeholder="Search products by name, brand, or category..."
        className="border border-gray-300 rounded-xl px-6 py-3 mb-8 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 hover:shadow-lg focus:scale-105"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl shadow-lg"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6">No products found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
