import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchSuperHeros = () => {
  return axios.get('http://localhost:4000/superheroes').then((val) => val.data);
};
const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends').then((val) => val.data);
};
function ParrallelQueries() {
  useQuery({ queryKey: ['superheroes'], queryFn: fetchSuperHeros });
  useQuery({ queryKey: ['friends'], queryFn: fetchFriends });

  // --------------------------------------------

  //  const {data:superheroesData} =  useQuery('superheroes', fetchSuperHeros);
  //  const {data:friendsData} =  useQuery('friends', fetchFriends);
  return <div>ParrallelQueries</div>;
}

export default ParrallelQueries;
