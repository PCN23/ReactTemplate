function FormControl({ label, children }) {
  return (
    <label>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <input {...rest} />
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest} />
    </FormControl>
  );
}

export function SelectOption({
  label,
  children,
  placeholder,
  ...rest
}) {
  return (
    <FormControl label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormControl>
  );
}

export function CheckboxControl({ legend }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <label>
        <input type="checkbox" />
        Yes
      </label>
      <label>
        <input type="checkbox" />
        No
      </label>
    </fieldset>
  );
}
