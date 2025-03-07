import { Character } from "../lib/types";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <>
      <h2>{character.name}</h2>
      <p>{character.heightCm} cm</p>
      <p>{character.massKg} kg</p>
      <p>Born in {character.birthYear}</p>
    </>
  );
}
