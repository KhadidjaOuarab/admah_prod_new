import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const useFetch = (URL) => {
   
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [URL]);
 /* console.log("MMMMMMMMMMM");
  console.log(data);
  console.log("MMMMMMMMMMM");*/
  return { data ,loading,error};
}
export default useFetch;
