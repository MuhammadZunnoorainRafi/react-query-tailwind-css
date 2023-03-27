import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Superheroes() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Superheroes</h1>
      <div>
        {data.map((val) => {
          return (
            <h3 key={val.id}>
              {val.id}.{val.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
}

export default Superheroes;
