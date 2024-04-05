import type { MetaFunction } from "@remix-run/node";
import { useCallback, useLayoutEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function About() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    setCount(parseInt(localStorage.getItem("count") ?? "0"));
  }, []);
  const handleClickIncrement = useCallback(() => {
    setCount((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("count", newCount.toString());
      return newCount;
    });
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      Hello from the about page!
      <button onClick={handleClickIncrement}>{count}</button>
    </div>
  );
}
