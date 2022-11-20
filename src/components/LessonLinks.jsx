const LessonLinks = ({ listName, list }) => {
  return (
    <>
      {list ? (
        <section>
          <h3>{listName}</h3>
          <ul>
            {list.map((item, index) => {
              const [text, link] = item;
              return (
                <li key={index}>
                  <a href={link}>{text}</a>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </>
  );
};

export default LessonLinks;
