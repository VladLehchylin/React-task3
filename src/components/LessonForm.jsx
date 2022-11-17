import React, { useRef, useState } from "react";

const LessonForm = ({ complited, setComplited, postName }) => {
  const [notice, setNotice] = useState(localStorage.getItem(postName));
  const refTextArea = useRef(null);

  const isComplited = (e) => {
    e.preventDefault();

    const newComplited = complited === "complited" ? "" : "complited";
    setComplited(newComplited);

    localStorage.setItem(post.name + "-complited", newComplited);
  };

  const saveNotice = (e) => {
    e.preventDefault();

    setNotice(ref.current.value);

    localStorage.setItem(post.name, ref.current.value);
  };

  return (
    <form>
      <textarea name="" id="" cols="30" rows="10" ref={refTextArea}>
        {notice}
      </textarea>
      <button onClick={saveNotice}>SAVE</button>
      <button onClick={isComplited}>Mark as Complited</button>
      <p>{notice}</p>
    </form>
  );
};

export default LessonForm;
