import { render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
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
  console.log(SelectControl);
  expect(SelectControl.name).toBe('cars');
  expect(SelectControl.required).toBe(true);
  expect(SelectControl.options.length).toBe(3);
});

test('Select Control with placeholder', async () => {
  render(
    <SelectOption label="Cars" placeholder="choose a car">
      <option>Honda</option>
      <option>Jeep</option>
      <option>Tesla</option>
    </SelectOption>
  );

  const SelectControl = screen.getByLabelText('Cars');
  expect(SelectControl.options.length).toBe(4);
  const placeHolderOption = SelectControl.options.item(0);
  expect(placeHolderOption.textContent).toBe('choose a car');
  expect(placeHolderOption.disabled).toBe(true);
});

test('checkbox control', async () => {
  render(
    <CheckboxControl
      legend="Do you accept?"
      label="yes"
      name="accept"
      required
    />
  );

  const legend = screen.getByText('Do you accept?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('submit button', async () => {
  render(<FormButton text="Submit Me" />);
  const button = screen.getByRole('button');
  expect(button.textContent).toBe('Submit Me');
});
