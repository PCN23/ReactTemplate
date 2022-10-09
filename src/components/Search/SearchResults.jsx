import React from 'react';
import SearchResultsCard from './SearchResultsCard';
import styles from './Search.css';

export default function SearchResults({
  results,
  infiniteScrollRef,
}) {
  return (
    <ul classname={styles.SearchResults}>
      {results.map((result, i) => {
        const ref =
          i == results.length - 3 ? infiniteScrollRef : undefinded;
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
