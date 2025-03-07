"use client";

import { Character } from "../lib/types";

export default function CharacterCard({
  character,
  setFocusedCharacter,
}: {
  character: Character;
  setFocusedCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
}) {
  return (
    <>
      <h2>{character.name}</h2>
      <button onClick={() => setFocusedCharacter(character)}>Learn more</button>
    </>
  );
}
