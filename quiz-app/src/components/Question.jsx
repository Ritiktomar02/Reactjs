import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import toast from "react-hot-toast";

const Question = () => {
  const { quizData } = useContext(UserContext);

  const [count, setCount] = useState(0);
  const [object, setObject] = useState({});
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (quizData?.length > 0) {
      setObject(quizData[count]);
      setSelected("");
    }
  }, [count, quizData]);

  const clickHandler = () => {
    if (!selected) {
      toast.error("Please select an option");
      return;
    }

    if (selected === object?.answer) {
      setScore((prev) => prev + 1);
    }

    if (count >= quizData.length - 1) {
      setTimeout(() => {
        const finalScore =
          score + (selected === object?.answer ? 1 : 0);

        toast.success(`Your Score: ${finalScore} / ${quizData.length}`);
      }, 300);
      return;
    }

    setCount((prev) => prev + 1);
  };

  return (
    <div className="w-[90%] md:w-[600px] bg-zinc-800 p-6 rounded-xl shadow-xl border border-zinc-700 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-zinc-300">
        Question {count + 1}
      </h1>

      <p className="text-xl font-medium">{object?.question}</p>

      <div className="flex flex-col gap-3 mt-2">
        {object?.options?.map((opt, index) => (
          <label
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg border border-zinc-700 cursor-pointer transition
              ${selected === opt ? "bg-blue-600 border-blue-500" : "hover:bg-zinc-700"}`}
          >
            <input
              type="radio"
              name="option"
              value={opt}
              onChange={(e) => setSelected(e.target.value)}
              className="accent-blue-500"
            />
            {opt}
          </label>
        ))}
      </div>

      <button
        onClick={clickHandler}
        className="mt-4 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-semibold tracking-wide shadow-md"
      >
        {count === quizData.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Question;