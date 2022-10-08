import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForms() {
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(searchParams.entries());
  const [pokemon, setPokemon] = useState(usableSearchParams.pokemon || '');



  return {
    pokemon,
    searchForm: usableSearchParams,
    setPokemon,
    setSearchForm: setSearchParams,
  };
}
