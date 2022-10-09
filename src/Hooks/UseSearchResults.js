import { SendAndArchive } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';

export default function UseSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );

  const nextPage = async () => {
    usableSearchParams.page = parseInt(usableSearchParams.page) + 1;
    setSearchParams(usableSearchParams);
    const moreResults = await SendAndArchive(usableSearchParams);
    setSearchResults(searchResults.concat(moreResults.results));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;

  const searchPokedex = async (searchObj) => {
    if (searchObj.page === null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);
    try {
      const body = await search(searchObj);
      setSearchResults(body.results);
    } catch (e) {
      setError('Error searching pokedex ' + e.body.toString());
    }
  };

  useEffect(() => void searchPokedex(usableSearchParams), []);

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchPokedex,
    infiniteScrollRef,
  };
}
