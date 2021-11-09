import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [flip, setFlip] = useState(false)
  return (
    <Card>
      <div>
        <div className="image" onClick={()=>{
          setFlip((flip)=> !flip)
        }}>
          <img alt="oh no!" src={flip ? pokemon.sprites.back : pokemon.sprites.front} style={{'max-width': '60px'}}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
