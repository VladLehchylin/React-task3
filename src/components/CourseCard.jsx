import React from "react";
import { useState } from "react";
import LessonForm from "./LessonForm";

const noticeState = {
  empty: "Make",
  notEmpty: "Change",
  save: "Save",
};

const CourseCard = ({ post }) => {
  const [complited, setComplited] = useState(
    localStorage.getItem(post.name + "-complited")
  );

  return (
    <div className={`course-card ${complited}`}>
      <h2>{post.title}</h2>
      <p>{post.type}</p>
      <p>LINKS</p>
      {post.links ? (
        <ul>
          {post.links.map((post) => {
            const [text, link] = post;
            return (
              <li>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      ) : null}
      <p>KeyPoints</p>
      {post.keyPoints ? (
        <ul>
          {post.keyPoints.map((post) => (
            <li dangerouslySetInnerHTML={{ __html: post }}></li>
          ))}
        </ul>
      ) : null}
      <p>TakeWays</p>
      {post.takeaways ? (
        <ul>
          {post.takeaways.map((post) => (
            <li>{post}</li>
          ))}
        </ul>
      ) : null}
      <p>YouTybe</p>
      <a href={post.youtube}>YOUTUBE</a>

      {post.hometask ? (
        <ul>
          {post.hometask.map((post) => (
            <li dangerouslySetInnerHTML={{ __html: post }}></li>
          ))}
        </ul>
      ) : null}
      
      <LessonForm
        complited={complited}
        setComplited={setComplited}
        postName={post.name}
      />
    </div>
  );
};

export default CourseCard;
