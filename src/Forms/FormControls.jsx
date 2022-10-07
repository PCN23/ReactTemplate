export function InputControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <input {...rest} />
    </label>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <textarea {...rest} />
    </label>
  );
}

export function SelectOption({ label, children, placeholder, ...rest }) {
  return (
    <label>
      {label}
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </label>
  );
}
