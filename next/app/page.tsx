import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <h1>Counters</h1>
      <Counter label="Apple" />
      <Counter label="Pear" />
      <Counter label="Pineapple" />
    </>
  );
}
