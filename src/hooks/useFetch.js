import { useEffect } from "react";
import { useState } from "react";

const useFetch = (currentUrl) => {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState(currentUrl);
  
    const fetchItem = () => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response));
    };
  
    useEffect(() => {
      fetchItem();
    }, [url]);
  
    return [data, setUrl];
  };

  export default useFetch;