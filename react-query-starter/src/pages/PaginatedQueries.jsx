import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const fetchPagination = (pageNum) => {
  return axios
    .get(`http://localhost:4000/colors?_limit=2&_page=${pageNum}`)
    .then((res) => res.data);
};

function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['colors', pageNumber],
    queryFn: () => fetchPagination(pageNumber),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Paginated Queries</h1>
      {data.map((val) => {
        return (
          <p className="font-semibold mb-1" key={val.id}>
            {val.id}.{val.label}
          </p>
        );
      })}
      <div className="mt-4">
        <button
          className="px-2 py-1 bg-slate-400 disabled:text-slate-300 rounded-md hover:opacity-80 mx-2"
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Back
        </button>
        <button
          className="px-2 bg-slate-400 py-1 rounded-md disabled:text-slate-300 hover:opacity-80 mx-2"
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedQueries;
