import { Character } from "../lib/types";
import CharacterCard from "./CharacterCard";

export default async function CharacterList() {
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

  return (
    <div>
      {results ? (
        results.map((entry: Character, index: number) => (
          <CharacterCard key={index} character={entry} />
        ))
      ) : (
        <h2>No characters found.</h2>
      )}
    </div>
  );
}
