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

export function SelectOption({ label,name, children, ...rest }) {
  return (
    <label name={name}>
      {label}
      <select required>{children}</select>
    </label>
  );
}
