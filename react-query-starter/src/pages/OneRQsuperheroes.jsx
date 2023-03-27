import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

import { useParams } from 'react-router-dom';

function OneRQsuperheroes() {
  const params = useParams();
  const { heroesId } = params;
  const fetchSingleHero = async () => {
    return axios
      .get(`http://localhost:4000/superheroes/${heroesId}`)
      .then((val) => val.data);
  };
  const queryClient = useQueryClient();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['heroes', heroesId],
    queryFn: fetchSingleHero,
    initialData: () => {
      const hero = queryClient.getQueryData(['superheroes']).find((val) => {
        return val.id === parseInt(heroesId);
      });

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">One Single Hero</h1>

      <p>
        {data.name} {data.alterEgo}
      </p>
    </div>
  );
}

export default OneRQsuperheroes;
