import { useContext } from "react";
import UserContext  from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { allProduct, setAllProduct } = useContext(UserContext);
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    setAllProduct((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full flex flex-wrap gap-6">
      {allProduct?.map((product) => {
        return (
          <div
            key={product.id}
            className="w-64 h-44 flex flex-col justify-between 
            bg-zinc-800 rounded-xl shadow-lg p-4 
            hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <h1 className="text-lg font-semibold text-white">
                {product.heading}
              </h1>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => navigate(`/edit/${product.id}`)}
                className="bg-blue-500 hover:bg-blue-600 
                text-white px-4 py-1 rounded-md 
                transition duration-200"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 hover:bg-red-600 
                text-white px-4 py-1 rounded-md 
                transition duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;