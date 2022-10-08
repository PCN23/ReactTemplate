import React from 'react';
import { SelectOption } from '../Forms/FormControls';

export default function SearchForm() {
  const { types } = useSearch();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <SelectOption lable="Select Type" name="type" value={type}>
        {types.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </SelectOption>
      <FormButton type="submit">Search</FormButton>
    </Form>
  );
}
