import { useState, useEffect } from 'react';

export const useMovieData = (fetchFunction, id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const newData = await fetchFunction(id);
        setData(newData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchFunction, id]);

  return { data, error, loading };
};
