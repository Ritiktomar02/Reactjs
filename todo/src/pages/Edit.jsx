/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  UserContext  from "../context/UserContext";

const Edit = () => {
  const { allProduct, setAllProduct } = useContext(UserContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useState("");

  // preload old product
  useEffect(() => {
    const product = allProduct.find((item) => item.id == id);
    if (product) {
      setText(product.heading);
    }
  }, [id]);

  const changeProduct = () => {
    if (!text.trim()) return;

    const updatedProducts = allProduct.map((item) =>
      item.id == id ? { ...item, heading: text } : item
    );

    setAllProduct(updatedProducts);
    navigate("/all");
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Edit Product</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Change your product name"
        className="py-4 w-full bg-white text-black px-5 rounded-lg shadow outline-none"
      />

      <button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
        onClick={changeProduct}
      >
        Change Product
      </button>
    </div>
  );
};

export default Edit;