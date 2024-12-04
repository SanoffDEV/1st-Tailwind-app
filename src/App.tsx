function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-4 border-blue-500 rounded-lg p-6 flex items-center gap-4 shadow-xl bg-white">
        <h2 className="bg-blue-500 flex items-center justify-center font-bold text-2xl text-white px-4 py-2 rounded">
          Yoo
        </h2>
        <button
          className="bg-blue-300 flex items-center justify-center font-bold text-black px-4 py-2 rounded hover:bg-blue-400 transition-all  hover:scale-125"
          aria-label="Click me"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
