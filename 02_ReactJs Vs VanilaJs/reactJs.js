import { useEffect, useState } from "react";

export default function App() {
  // Destructing Array
  let [advice, setAdvice] = useState("");
  //  advice = "Taimoor"; // I'm capable to change or modified this variable

  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json(); // if you will not use await so it still in promise fulfilled, when use await so resolved
    setAdvice(data?.slip?.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    // It run two times when i page reload how this handle?, in future we will discuss
    getAdvice();
  }, []);

  //   UseEffect is liye aya kai page reload jab hota tha so state update nhi hoti thi.

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

// Second Component
function Message(props) {
  // it not a simple function it accept object
  return (
    <p>
      Count of total Advice <strong>{props.count}</strong> Advices
    </p>
  );
}
