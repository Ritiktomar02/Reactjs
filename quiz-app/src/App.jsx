import Question from "./components/Question";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-zinc-900 via-black to-zinc-900 text-white flex flex-col items-center gap-10">
      <h1 className="font-bold text-3xl uppercase tracking-widest mt-10 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Quiz App
      </h1>

      <Question />
    </div>
  );
};

export default App;