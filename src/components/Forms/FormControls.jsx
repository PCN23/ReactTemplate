/* eslint-disable max-len */
import styles from './FormControls.css';

function FormControl({ label, children }) {
  return (
    <label className={styles.FormControl}>
      {label}
      {children}
    </label>
  );
}

export function InputControl({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <input {...rest} required={required} />
    </FormControl>
  );
}

export function TextAreaControl({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <textarea {...rest} required={required}/>
    </FormControl>
  );
}

export function SelectOption({ label, required, children, placeholder, ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <select {...rest} required={required}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
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

export function FormButton({ children, ...rest }) {
  return <button className={styles.FormButton} {...rest}>
    {children}
  </button>;
}
