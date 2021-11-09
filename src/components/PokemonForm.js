import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setDisplayedPokemon, displayedPokemon}) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontImg, setFrontImg] = useState('')
  const [backImg, setBackImg] = useState('')
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          fetch('http://localhost:3001/pokemon',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              hp: hp,
              sprites:{
                front: frontImg,
                back: backImg
              }
            })
          })
          .then(res=> res.json())
          .then(data=> setDisplayedPokemon((displayedPokemon)=>[...displayedPokemon, data]))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value= {name} onChange={(e)=>{
            setName(e.target.value)
          }}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(e)=>{
            setHp(e.target.value)
          }}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={(e)=>{
              setFrontImg(e.target.value)
            }}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={(e)=>{
              setBackImg(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
