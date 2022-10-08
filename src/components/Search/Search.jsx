// import { Input } from '@mui/icons-material';
import { useState } from 'react';
import { getAllPoke } from '../../services/pokedex';
import { FormButton, InputControl } from '../Forms/FormControls';

export default function Search() {
  const { pokemon, setPokemon } = useState([]);

  const allPoke = async () => {
    const pokemonResults = await getAllPoke();
    setPokemon();
    setPokemonResults();
  };

  return (
    <div>
      <form>
        <InputControl label="search" value="" />
        <FormButton text="submit" />
      </form>
          <div>
            pokemon
      </div>
    </div>
  );
}
