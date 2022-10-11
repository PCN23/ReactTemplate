import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectOption,
  TextAreaControl,
} from '../Forms/FormControls';
import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      Dashboard
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="First and last name"
        />

        <InputControl label="Date" required type="date" name="date" />

        <SelectOption
          label="Letter"
          required
          name="letter"
          placeholder="Select a Grade"
        >
          <option value="1">Good</option>
          <option value="2">Better</option>
          <option value="3">Best</option>
        </SelectOption>

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="Tell me about yourself"
        />

        <CheckboxControl legend="Do you accept?" label="Yes" />

        <FormButton text="Submit" />
      </form>
    </div>
  );
}
