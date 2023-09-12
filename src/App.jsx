import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
}

export default App;