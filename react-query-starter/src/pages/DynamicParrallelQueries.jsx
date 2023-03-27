import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function DynamicParrallelQueries({ dynamicQ }) {
  const fetchDynaicHeroes = (id) => {
    return axios
      .get(`http://localhost:4000/superheroes/${id}`)
      .then((val) => val.data);
  };
  useQueries(
    dynamicQ.map((val) => {
      return {
        queries: [
          {
            queryKey: ['dynamicQ', val],
            queryFn: () => fetchDynaicHeroes(val),
          },
        ],
      };
    })
  );

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Dynamic Parallel Queries</h1>
    </div>
  );
}

export default DynamicParrallelQueries;
