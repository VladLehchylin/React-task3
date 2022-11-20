import React from "react";
import { useState } from "react";

import LessonForm from "./LessonForm";
import ItemList from "./ItemList";
import LessonLinks from "./LessonLinks";

const listsNames = {
  keyPoints: "Key Points",
  prerequisite: "Prerequisite",
  takeaways: "Take Aways",
  hometask: "Home Task",
  links: "Links",
};

const CourseCard = ({ lesson }) => {
  const [complited, setComplited] = useState(
    localStorage.getItem(lesson.name + "-complited")
  );

  return (
    <div className={`course-card ${complited || ''}`}>
      <h2>{lesson.title}</h2>
      <p>Lection type: {lesson.type}</p>

      <ItemList listName={listsNames.keyPoints} list={lesson.keyPoints} />
      <ItemList listName={listsNames.prerequisite} list={lesson.prerequisite} />
      <ItemList listName={listsNames.takeaways} list={lesson.takeaways} />
      <ItemList listName={listsNames.hometask} list={lesson.hometask} />
      <LessonLinks listName={listsNames.links} list={lesson.links} />

      <section>
        <h3>YouTube</h3>
        <a href={lesson.youtube}>Link</a>
      </section>

      <LessonForm
        complited={complited}
        setComplited={setComplited}
        postName={lesson.name}
      />
    </div>
  );
};

export default CourseCard;
