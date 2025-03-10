import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Go to the <Link href="/characters">characters page</Link>
      </p>
    </>
  );
}
