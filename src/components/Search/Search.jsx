/* eslint-disable max-len */
import React from 'react';
import SearchForm from './SearchForm.jsx';
import useSearchResults from '../../Hooks/useSearchResults.js';
import { FormButton } from '../Forms/FormControls.jsx';
import SearchResults from './SearchResults.jsx';

export default function Search() {
  const {
    pokemon,
    infiniteScrollRef,
    nextPage,
    setPokemon,
    searchParams,
    searchResults,
    searchPokedex,
  } = useSearchResults();

  return <section>
    <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex}/>
    <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>Moar</FormButton>
  </section>;
  
}
