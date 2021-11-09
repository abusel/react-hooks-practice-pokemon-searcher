import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [displayedPokemon, setDisplayedPokemon] = useState([])
  const [input, setInput] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=> res.json())
    .then(data=> setDisplayedPokemon(data))
  },[])
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setDisplayedPokemon={setDisplayedPokemon} displayedPokemon={displayedPokemon}/>
      <br />
      <Search setDisplayedPokemon={setDisplayedPokemon} displayedPokemon={displayedPokemon} input= {input} setInput={setInput}/>
      <br />
      <PokemonCollection displayedPokemon={displayedPokemon} input={input}/>
    </Container>
  );
}

export default PokemonPage;
