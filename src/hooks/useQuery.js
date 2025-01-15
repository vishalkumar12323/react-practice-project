import { useEffect, useState } from "react";

export const useQuery = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reqError, setReqError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();

        setData(data);
      } catch (err) {
        console.log(err);
        setReqError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, loading, reqError };
};
