import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useHomeOrSearch = (fetchFunction, initialQuery) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        if (initialQuery) {
          const clearQuery = initialQuery.split('/').pop();
          const newData = await fetchFunction(clearQuery);
          if (newData.length === 0) {
            toast.error('No movie available');
          } else {
            setData(newData);
          }
          return;
        }

        const homeData = await fetchFunction(initialQuery);
        setData(homeData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchFunction, initialQuery]);

  return { data, error, loading };
};
