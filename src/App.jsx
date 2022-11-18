import "./App.css";
import useFetch from "./hooks/useFetch";
import CourseCard from "./components/CourseCard";

function App() {
  const [course, setCourse] = useFetch("./course.json");

  return (
    <div className="App">
      <header>
        <h1>{course && course.title}</h1>
      </header>
      <main>
        {course ? (
          course.lessons.map((item) => <CourseCard lesson={item} />)
        ) : (
          <p>LOADING</p>
        )}
      </main>
    </div>
  );
}

export default App;
