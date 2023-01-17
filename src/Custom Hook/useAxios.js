import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setProductAction } from "../Redux/actions/actions";

const useAxios = (url) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([{}]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  //useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setProducts(response.data);
        console.log(products);
        dispatch(setProductAction(response.data));
        console.log(products);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
 // }, []);

  return { products, error, loaded };
};

export default useAxios;
