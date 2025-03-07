"use client";

import { Character } from "../lib/types";

export default function CharacterDetailsCard({
  character,
  setFocusedCharacter,
}: {
  character: Character;
  setFocusedCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
}) {
  console.log(character)
  return (
    <>
      <h2>{character.name}</h2>
      <p>{character.heightCm} cm</p>
      <p>{character.massKg} kg</p>
      <p>Born in {character.birthYear}</p>
      <button onClick={() => setFocusedCharacter(null)}>Go back</button>
    </>
  );
}
