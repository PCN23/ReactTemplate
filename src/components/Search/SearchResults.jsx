// import React from 'react';
import SearchResultsCard from '../Search/SearchResultsCard.jsx';
import styles from './Search.css';

export default function SearchResults({
  results,
  infiniteScrollRef
}) {
  return (
    <ul className={styles.SearchResults}>
      {results.map((result, i) => {
        const ref = i == results.length - 3 ? infiniteScrollRef : undefined;
        return (
          <SearchResultsCard
            key={results._id}
            pokemon={result}
            infiniteScrollRef={ref}
          />
        );
      })}
    </ul>
  );
}
