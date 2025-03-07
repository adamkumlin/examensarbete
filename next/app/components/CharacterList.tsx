import { Character } from "../lib/types";
import CharacterCard from "./CharacterCard";

export default async function CharacterList() {
  const response = await fetch("http://swapi.dev/api/people");
  const data = await response.json();

  return (
    <div>
      {data.results ? (
        data.results.map((entry: Character, index: number) => (
          <CharacterCard key={index} character={entry} />
        ))
      ) : (
        <h2>No characters found.</h2>
      )}
    </div>
  );
}
