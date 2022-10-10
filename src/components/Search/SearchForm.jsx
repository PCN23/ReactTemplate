import React from 'react';
import { SelectOption } from '../Forms/FormControls.jsx';

export default function SearchForm({onsubmit}) {
  const { types } = useSearch();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formData);
  };

return <Form onSubmit={submitHandler}>
  <SelectOption
    label="text"
    name="pokemon"
    value={pokemon}>
        onChange={e => setPokemon(e.target.value)}
    />
    <FormButton type="submit">Search</FormButton>
    </Form>
}
