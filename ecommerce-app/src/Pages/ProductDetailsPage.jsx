

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await fetchProductById(id);
        setProduct(data);
      } catch {
        toast.error("Product not found");
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <button className="mb-4 text-blue-500" onClick={() => navigate("/")}>
        ← Back to Search
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl">₹{product.price}</p>
          <p>{product.description}</p>
          <p className="text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
