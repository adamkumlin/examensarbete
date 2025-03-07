import Product from "./components/Product";

export default function Home() {
  return (
    <>
      <h1>Products</h1>
      <Product title="Apple" description="The apple is red."/>
      <Product title="Pear" description="The pear is green."/>
      <Product title="Pineapple" description="The pineapple is yellow."/>
    </>
  );
}
