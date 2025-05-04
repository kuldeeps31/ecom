
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border border-gray-300 p-4 rounded-xl cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all ease-in-out duration-300"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="mt-4">
        <h3 className="font-bold text-xl text-gray-800">{product.name}</h3>
        <p className="text-lg font-semibold text-blue-600">₹{product.price}</p>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-sm text-gray-500">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
