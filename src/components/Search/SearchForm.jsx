import React from 'react';
import { SelectOption } from '../Forms/FormControls';

export default function SearchForm() {
  const { types } = useSearch();
  const submitHandler = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target)
      onsubmit(formData);
      const params = new URLSearchParams(location.search);
      Array.from(formData.entries()).forEach(([k, v]) => {
        params.set(k, v);
      });
      window.history.replaceState(
      { },
      '',
        `${location.pathname}?${params.toString()}`,
        );

return <Form onsubmit={submitHandler}>
    <SelectOption lable="Select Type" name="type" value={type}>
        {types.map(type => {
        return <option key={type} value={type}>{type}</option>
        })}
    </SelectOption>
    <FormButton type="submit">Search</FormButton>
    </Form>
}
