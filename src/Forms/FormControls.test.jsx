import { render, screen } from '@testing-library/react';
import { InputControl } from './FormControls.jsx';

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
