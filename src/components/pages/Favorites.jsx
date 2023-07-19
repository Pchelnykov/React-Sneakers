import Card from "../Card";

const Favorites = ({ items, addToFavorite, favorited = false }) => (
  <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1>Мои закладки</h1>
    </div>
    <div className="d-flex flex-wrap">
      {items.map((items, i) => {
        return (
          <Card
            key={i}
            favorited={true}
            addToFavorite={addToFavorite}
            {...items}
          />
        );
      })}
    </div>
  </div>
);

export default Favorites;
