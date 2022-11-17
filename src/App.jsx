import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CourseCard from "./components/CourseCard";

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

function App() {
  const [posts, setPosts] = useFetch(
    "https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json"
  );

  return (
    <div className="App">
      <h1>{posts && posts.title}</h1>
      {posts ? (
        posts.lessons.map((post) => <CourseCard post={post} />)
      ) : (
        <p>LOADING ERROR</p>
      )}
    </div>
  );
}

export default App;
