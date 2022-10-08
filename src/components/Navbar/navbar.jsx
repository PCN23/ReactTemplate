/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import styles from './Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  // bring navbar out of the way when user clicks on link, using useLocation
  const location = useLocation();
  // whenever location Change Circle Sharp, expand bar does the opposite of being opened
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className={styles.navbar} id={expandNavbar ? 'open' : 'close'}>
      <div className={styles.toggleButton}>
        {/* makes a button apear when screen gets too small */}
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
}

export default Navbar;
