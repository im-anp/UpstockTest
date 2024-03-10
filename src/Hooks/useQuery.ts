import {useState, useEffect} from 'react';

interface QueryResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useQuery<T>(url: string): QueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, loading, error};
}

export default useQuery;
