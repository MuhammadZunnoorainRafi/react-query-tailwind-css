import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchUsers = (email) => {
  return axios
    .get(`http://localhost:4000/users/${email}`)
    .then((res) => res.data);
};

const fetchChannel = (channelId) => {
  return axios
    .get(`http://localhost:4000/channels/${channelId}`)
    .then((res) => res.data);
};

function DependentQuerires({ email }) {
  const { data } = useQuery(['users', email], () => fetchUsers(email));
  const channelId = data?.channelId;
  useQuery({
    queryKey: ['channel', channelId],
    queryFn: () => fetchChannel(channelId),
    enabled: !!channelId,
  });
  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Dependent Queries</h1>
    </div>
  );
}

export default DependentQuerires;
