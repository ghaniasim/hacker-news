import { useState, useEffect } from "react";

import { api } from "../models/requests";

const useFetch = (commentsArray?: API.Comments) => {
  const [comments, setComments] = useState<
    (API.Comment | undefined)[] | undefined
  >([]);
  const [fetching, setFetching] = useState<boolean>(false);

  if (!commentsArray) return { fetching, comments };

  const fetch = async () => {
    setFetching(true);
    try {
      const response = await api.getComments(commentsArray);
      setComments(response);
      setFetching(false);
    } catch (error) {
      console.log("Error ", error);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [commentsArray]);

  return { fetching, comments };
};

export default useFetch;
