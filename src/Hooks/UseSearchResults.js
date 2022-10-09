import { SendAndArchive } from '@mui/icons-material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function UseSearchResults() {
    const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(
    searchParams.entries()
  );

  const nextPage = async () => {
      usableSearchParams.page = parseInt(usableSearchParams.page) + 1;
      setSearchParams(usableSearchParams);
    const moreResults = await SendAndArchive(usableSearchParams);
  };
  return <div>UseSearchResults</div>;
}
