import styles from './Dashboard.css';

export default function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      Dashboard
      <form>
        <label>
          Name
          <input name="name" placeholder="First and last name" />
        </label>

        <label>
          Date
          <input type="date" name="date" />
        </label>

        <label>
          Option
          <select>
            <option disabled selected value="">
              Select an option
            </option>
            <option value="1">Good</option>
            <option value="2">Better</option>
            <option value="3">Best</option>
          </select>
        </label>

        <label>
          Bio
          <textarea name="bio" placeholder="Tell me about yourself" />
        </label>

        <p>
          Do you accept?
          <label>
            <input type="checkbox" />
            Yes
          </label>
          <label>
            <input type="checkbox" />
            No
          </label>
        </p>
      </form>
    </div>
  );
}
