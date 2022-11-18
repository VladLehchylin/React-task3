const ItemList = ({ listName, list }) => {
  return (
    <>
      {list ? (
        <section>
          <h3>{listName}</h3>
          <ul>
            {list.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
};

export default ItemList;
