import { useState, useEffect } from "react";

function useTransactions(url) {
  const [transactions, setTransactions] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      const { data } = await fetch(url)
        .then((res) => res.json())
        .catch((err) => setError(err));
      console.log(data);
      setTransactions(data);
      setIsPending(false);
    };
    fetchCountry();
  }, [url]);
  return {
    transactions,
    isPending,
    error,
  };
}

export default useTransactions;
