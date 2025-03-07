export default function Product({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
