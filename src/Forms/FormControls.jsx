export function InputControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <input {...rest} />
    </label>
  );
}
