import React from 'react';
import useSearchForm from '../../Hooks/useSearchForm.js';
import { FormButton, InputControl } from '../Forms/FormControls.jsx';

export default function SearchForm({ onSubmit }) {
  const { pokemon, setPokemon, searchForm, setSearchForm } = useSearchForm();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
  };

  return <form onSubmit={submitHandler}>
    <InputControl
      type="text"
      name="pokemon"
      value={pokemon}
      onChange={e => setPokemon(e.target.value)}
    />
    <FormButton type="submit">Search</FormButton>
  </form>;
  
}
