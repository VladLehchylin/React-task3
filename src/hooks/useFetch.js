import { useEffect } from "react";
import { useState } from "react";

const useFetch = (currentUrl) => {
    const [data, setData] = useState(null);
    const [url, setUrl] = useState(currentUrl);
  
    const fetchPost = () => {
      fetch(url)
        .then((x) => x.json())
        .then((x) => setData(x));
    };
  
    useEffect(() => {
      fetchPost();
    }, [url]);
  
    return [data, setUrl];
  };

  export default useFetch;