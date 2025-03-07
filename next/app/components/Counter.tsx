"use client";

import { useState } from "react";

export default function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{label} counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
