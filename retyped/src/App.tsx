import { useState, useEffect } from "react";

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
    <>
      <h1>Welcome to the Vite App</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>The count is {count}</p>
      <button onClick={() => setCount(0)}>Reset Count</button>
      <p>{storedNum}</p>
    </>
  );
}

export default App;
