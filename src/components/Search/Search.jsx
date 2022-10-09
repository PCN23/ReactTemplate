/* eslint-disable max-len */
import { FormButton } from '../Forms/FormControls';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function Search() {
  const {
    pokemon,
    infiniteScrollRef,
    setPokemon,
    searchParams,
    searchResults,
    searchPokedex,
  } = useSearchResults();

  return (
    <section>
      <SearchForm
        pokemon={pokemon} setPokemon={setPokemon} onSubmit={searchPokedex} />
      <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef} />
      <FormButton onClick={nextPage} >Moar</FormButton>
    </section>
  );
}
