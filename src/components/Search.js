import React from "react";

function Search({setDisplayedPokemon, displayedPokemon, input, setInput}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={input} onChange={(e)=>{
          setInput(e.target.value)
        }}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
