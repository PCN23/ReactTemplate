import SearchForm from './SearchForm';
import searchResults from 

export default function Search() {
  const {
    pokemon,
    setPokemon,
    searchParams,
    searchResults,
    searchPokedex,
  } = useSearchResults();

  return (
    <section>
      <SearchForm
        pokemon={pokemon}
        setPokemon={setPokemon}
        onSubmit={searchPokedex}
      />
      <searchResults results={searchResults} />
    </section>
  );
}
