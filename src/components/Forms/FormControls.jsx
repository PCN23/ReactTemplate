import styles from './FormControls.css';

function FormControl({ label, children }) {
  return (
    <label className={styles.FormControl}>
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

export function SelectOption({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <input {...rest} required={required}/>
    </FormControl>
  );
}

export function CheckboxControl({ legend, ...rest }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <label>
        <input type="checkbox" {...rest} />
        {/* this label isnt working */}
        Yes
      </label>
      <label>
        <input type="checkbox" {...rest} />
        {/* this label isnt working */}
        No
      </label>
    </fieldset>
  );
}

export function FormButton({ text }) {
  return <button>{text}</button>;
}
