import Card from "../Card";
import Skeleton from "./Skeleton";

function Home({
  items,
  changeValue,
  onChangeValue,
  setChangeValue,
  addToCart,
  isFavorite,
  setIsFavorite,
  addToFavorite,
  isLoading,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {changeValue ? `Поиск по запросу: ${changeValue}` : "Все кроссовки"}
        </h1>
        <div className="search">
          <img width={18} height={18} src="/img/search.png" alt="search" />
          <input
            type="text"
            name="search"
            placeholder="Поиск..."
            onChange={onChangeValue}
            value={changeValue}
          />
          {changeValue && (
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
              onClick={() => {
                setChangeValue("");
              }}
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) => {
            return item.title.toLowerCase().includes(changeValue.toLowerCase());
          })
          .map((items, i) => {
            return isLoading ? (
              <Skeleton />
            ) : (
              <Card
                key={i}
                onPlus={addToCart}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
                addToFavorite={(obj) => addToFavorite(obj)}
                {...items}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
