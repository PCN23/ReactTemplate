// import React from 'react';
import styles from './Search.css';

export function SearchResultsCard({ pokemon, infiniteScrollRef }) {
  return (
    <li className={styles.SearchResultsCard} ref={infiniteScrollRef}>
      {pokemon.pokemon}
    </li>
  );
}