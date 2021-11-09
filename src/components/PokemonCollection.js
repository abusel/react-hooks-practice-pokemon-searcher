import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({displayedPokemon, input}) {
  return (
    <Card.Group itemsPerRow={6}>
      {displayedPokemon.filter((pokemon)=>pokemon.name.includes(input)).map((pokemon)=>{
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
