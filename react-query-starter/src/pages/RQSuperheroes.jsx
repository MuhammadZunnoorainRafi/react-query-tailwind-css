import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

function RQSuperheroes() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const formSubmit = ({ name, alterEgo }) => {
    mutate({ name, alterEgo });
    setValue('name', '');
    setValue('alterEgo', '');
  };

  const fetchHeroes = async () => {
    return axios
      .get('http://localhost:4000/superheroes')
      .then((val) => val.data);
  };

  const addHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero);
  };

  const { mutate } = useMutation({
    mutationFn: addHero,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: 'superheroes' });
    // },
    onMutate: async (heroData) => {
      await queryClient.cancelQueries(['superheroes']);
      const previousData = queryClient.getQueryData(['superheroes']);

      queryClient.setQueryData(['superheroes'], (oldQueryData) => {
        return [...oldQueryData, { id: oldQueryData?.length + 1, ...heroData }];
      });
      return { previousData };
    },
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(['superheroes'], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['superheroes']);
    },
  });

  const { isError, isInitialLoading, data, error, refetch } = useQuery({
    queryKey: ['superheroes'],
    queryFn: fetchHeroes,
  });

  if (isInitialLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">QR Superheroes</h1>
      <form
        className="flex items-start space-x-3 mb-3"
        onSubmit={handleSubmit(formSubmit)}
      >
        <div className="flex flex-col space-y-1">
          <input
            className="p-2 border border-slate-700  rounded-md"
            placeholder="Name"
            type="text"
            {...register('name', { required: 'Please Enter Name' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col space-y-1">
          <input
            className="p-2 border border-slate-700 rounded-md"
            placeholder="Alter Ego"
            type="text"
            {...register('alterEgo', { required: 'Please Enter Alter Ego' })}
          />
          {errors.alterEgo && (
            <p style={{}} className="text-red-500">
              {errors.alterEgo.message}
            </p>
          )}
        </div>
        <button className="px-3 py-2 rounded-md bg-green-500 text-white hover:opacity-80">
          Add Hero
        </button>
      </form>
      <button
        className="mb-3 px-3 py-1 rounded-md bg-blue-500 text-white hover:opacity-80"
        onClick={refetch}
      >
        Refetch
      </button>
      <div>
        {data?.map((val) => {
          return (
            <div key={val.id} className="flex flex-col items-start space-y-3">
              <Link
                className="hover:text-slate-700"
                to={`/RQsuperheroes/${val.id}`}
              >
                {val.id}.{val.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RQSuperheroes;
