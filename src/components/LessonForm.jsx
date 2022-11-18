import React, { useRef, useState } from "react";

const LessonForm = ({ complited, setComplited, postName }) => {
  const textArea = useRef(null);
  const [notice, setNotice] = useState(localStorage.getItem(postName));
  const [hideTextArea, setHideTextArea] = useState(true);

  const setInLocalStorage = () => {
    setNotice(textArea.current.value);
    localStorage.setItem(postName, textArea.current.value);
  };
  
  const isComplited = (e) => {
    e.preventDefault();

    const newComplited = complited === "complited" ? "" : "complited";
    setComplited(newComplited);

    localStorage.setItem(postName + "-complited", newComplited);
  };

  const saveNotice = (e) => {
    e.preventDefault();
    setInLocalStorage();
    setHideTextArea(true);
  };

  const makeNotice = (e) => {
    e.preventDefault();
    if (textArea.current.value !== "") {
      setInLocalStorage();
      setHideTextArea(true);
    }
  };

  const changeNoice = (e) => {
    e.preventDefault();
    setHideTextArea(false);
  };

  return (
    <form className="flex">
      <h3>Your Notice</h3>
      {notice && hideTextArea ? (
        <>
          <p>{notice}</p>
          <button onClick={changeNoice}>Change Notice</button>
        </>
      ) : (
        <>
          <textarea ref={textArea}>{notice}</textarea>
          {notice ? (
            <button onClick={saveNotice}>Save</button>
          ) : (
            <button onClick={makeNotice}>Make Notice</button>
          )}
        </>
      )}

      <button onClick={isComplited}>Mark as {complited ? 'uncomplited' : 'complited'}</button>
    </form>
  );
};

export default LessonForm;
