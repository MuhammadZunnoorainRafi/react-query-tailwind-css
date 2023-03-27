import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchInfinite = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
  );

  return res.data;
};

function InfiniteQueries() {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    // isFetching,
    // isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['colors'],
    queryFn: fetchInfinite,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // if (isFetching && isFetchingNextPage) return <p>Fetching...</p>;
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Infinite Queries</h1>
      <div className="space-y-2">
        {data.pages
          .flatMap((val) => val)
          .map((group) => (
            <p className="text-slate-700 font-semibold" key={group.id}>
              {group.label}
            </p>
          ))}

        {/* {data.pages.map((group, ind) => {
          return (
            <div key={ind}>
              {group.map((val) => {
                return (
                  <p className="text-slate-700 font-semibold" key={val.id}>
                    {val.id}.{val.label}
                  </p>
                );
              })}
            </div>
          );
        })} */}
      </div>
      <button
        disabled={!hasNextPage}
        onClick={fetchNextPage}
        className="px-3 py-1 mt-3 rounded-md disabled:bg-slate-500 disabled:hover:opacity-100 text-white bg-blue-900 hover:opacity-80"
      >
        Load more
      </button>
    </div>
  );
}

export default InfiniteQueries;
