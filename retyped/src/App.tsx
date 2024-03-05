import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import "./App.css";
function App(): React.ReactNode {
  let storedNum: string | null = "New Value";
  if (localStorage.getItem("count") !== undefined) {
    storedNum = localStorage.getItem("count");
  } else {
    storedNum = "There is no stored value";
  }
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    if (count > 4) {
      localStorage.setItem("count", `${count}`);
    }
  }, [count]);
  return (
    <div className="flex dark flex-col">
      <Sidebar />
      <div className="flex-col ml-[80px]">
        <PageContent />
        <p className="text-center">The count is: {count}</p>
        <button
          className="btn border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-3xl p-2 bg-blue-200 rounded-lg flex"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count
        </button>
        <h1>Stored Num is {storedNum}</h1>
      </div>
    </div>
  );
}

export default App;
