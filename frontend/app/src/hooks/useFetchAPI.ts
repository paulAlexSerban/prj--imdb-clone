import { useEffect, useState } from "react";

export const useFetchAPI = (
  url: string = "",
  query: string = ""
): [any, any, boolean] => {
  const [data, setData] = useState(null);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(
      `${baseUrl}${url}?api_key=${apiKey}${
        query.length > 1 ? `&query=${query}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, query]);

  return [data, error, loading];
};
