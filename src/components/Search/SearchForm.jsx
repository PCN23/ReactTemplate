import React from 'react';
import UseSearchResults from '../../Hooks/UseSearchResults.js';
import { SelectOption } from '../Forms/FormControls.jsx';

export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon } = UseSearchResults();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return (
    <Form onSubmit={submitHandler}>
      <SelectOption
        label="text"
        name="pokemon"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
}
