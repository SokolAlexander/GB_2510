import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

import { apiUrl } from "../../utils/constants";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestArticles = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      console.log(response);

      if (!response.ok) {
        throw new Error("not ok");
      }

      const result = await response.json();

      setError(false);
      setArticles(result);
    } catch (err) {
      console.warn(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestArticles();
  }, []);

  return (
    <>
      <h3>Articles</h3>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <button onClick={requestArticles}>REQUEST</button>
          {error && <h4>ERRROR</h4>}
          <ul>
            {articles.map((art) => (
              <li key={art.id}>{art.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
