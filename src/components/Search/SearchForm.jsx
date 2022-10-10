// import React from 'react';
import useSearchResults from '../../Hooks/useSearchResults.js';
import { FormButton, SelectOption } from '../Forms/FormControls.jsx';

export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon } = useSearchResults();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return <form onSubmit={submitHandler}>
    <SelectOption
      label="text"
      name="pokemon"
      value={pokemon}
      onChange={(e) => setPokemon(e.target.value)}
    />
    <FormButton type="submit">Search</FormButton>
  </form>;
  
}
