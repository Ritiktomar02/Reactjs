import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import  UserContext  from "../context/UserContext";

const Home = () => {
  const { setAllProduct } = useContext(UserContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const addProduct = () => {
    if (!text.trim()) return;

    const newObj = {
      id: Date.now(),
      heading: text,
    };

    setAllProduct((prev) => [...prev, newObj]);
    setText("");
    navigate("/all");
  };

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Add Product</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addProduct()}
        type="text"
        placeholder="Enter your product"
        className="py-4 w-full bg-white text-black px-5 rounded-lg shadow outline-none"
      />

      <button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
        onClick={addProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default Home;