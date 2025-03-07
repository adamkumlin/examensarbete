"use client";

import { useEffect, useState } from "react";
import { Character } from "../lib/types";
import CharacterCard from "./CharacterCard";
import CharacterDetailsCard from "./CharacterDetailsCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [focusedCharacter, setFocusedCharacter] = useState<Character | null>(
    null
  );

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://swapi.dev/api/people");
      const data = await response.json();
      const results: Character[] = [];
      for (const entry of data.results) {
        const character: Character = {
          name: entry.name,
          heightCm: entry.height,
          massKg: entry.mass,
          birthYear: entry.birth_year,
        };
        results.push(character);
      }
      setCharacters(results);
    }
    getData();
  }, []);

  return (
    <div>
      {characters && !focusedCharacter
        ? characters.map((entry: Character, index: number) => (
            <CharacterCard
              key={index}
              character={entry}
              setFocusedCharacter={setFocusedCharacter}
            />
          ))
        : null}

      {focusedCharacter ? (
        <CharacterDetailsCard
          character={focusedCharacter}
          setFocusedCharacter={setFocusedCharacter}
        />
      ) : null}
    </div>
  );
}
