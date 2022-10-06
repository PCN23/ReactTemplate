import { render, screen } from '@testing-library/react';
import {
  InputControl,
  SelectOption,
  TextAreaControl,
} from './FormControls.jsx';

test('Input control', async () => {
  render(
    <InputControl
      label="Here is My label"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('Here is My label');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('Text Area Control', async () => {
  render(
    <TextAreaControl
      label="Bio"
      name="bio"
      required
      placeholder="about you"
    />
  );

  const textAreaControl = screen.getByLabelText('Bio');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('about you');
});

test('Select Option', async () => {
  render(
    <SelectOption label="Cars" name="cars" required>
      <option>Honda</option>
      <option>Jeep</option>
      <option>Tesla</option>
    </SelectOption>
  );

  const SelectControl = screen.getByLabelText('Cars');
  expect(SelectControl.name).toBe('cars');
  expect(SelectControl.required).toBe(true);
  expect(SelectControl.option).toBe(3);
});
