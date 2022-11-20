import "./App.css";
import useFetch from "./hooks/useFetch";
import CourseCard from "./components/CourseCard";

function App() {
  const [course, setCourse] = useFetch("https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json");

  return (
    <div className="App">
      <header>
        <h1>{course && course.title}</h1>
      </header>
      <main>
        {course ? (
          course.lessons.map((item, index) => <CourseCard key={index} lesson={item} />)
        ) : (
          <p>LOADING</p>
        )}
      </main>
    </div>
  );
}

export default App;
