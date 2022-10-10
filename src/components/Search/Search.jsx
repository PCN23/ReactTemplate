/* eslint-disable max-len */
// import React from 'react';
import UseSearchResults from '../../Hooks/UseSearchResults';
import { FormButton } from '../Forms/FormControls';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function Search() {
  const {
    pokemon,
    infiniteScrollRef,
    nextPage,
    setPokemon,
    // searchParams,
    searchResults,
    searchPokedex,
  } = UseSearchResults();

  return (
    <section>
      <SearchForm
        pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
      <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef} />
      <FormButton onClick={nextPage} >Moar</FormButton>
    </section>
  );
}
