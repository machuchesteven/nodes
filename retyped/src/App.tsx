import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
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
    <div className="flex dark">
      <Sidebar />
    </div>
  );
}

export default App;
