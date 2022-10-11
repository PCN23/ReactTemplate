/* eslint-disable max-len */
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
    searchResults,
    searchPokedex,
  } = useSearchResults();
  // search params not being used but search feature is working, unable to identify where the issue is


  return <section>
    <SearchForm pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex}/>
    <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>Moar</FormButton>
  </section>;
  
}
