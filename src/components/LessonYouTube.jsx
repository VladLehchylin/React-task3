import React from "react";

const LessonYouTube = ({ youtube, hidden }) => {
  return (
    <section className="borderBottom">
      <h3>YouTube</h3>
      {!hidden ? <a href={youtube}>Link</a> : <p>Only for students</p>}
    </section>
  );
};

export default LessonYouTube;
