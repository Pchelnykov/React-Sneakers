import React from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  onPlus,
  imgUrl,
  title,
  price,
  addToFavorite,
  favorited = false,
}) {
  const [onChange, setOnChange] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onChangeImg = () => {
    onPlus({ imgUrl, title, price });
    setOnChange(!onChange);
  };

  const onClickFavorite = () => {
    addToFavorite({ id, imgUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorites} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="liked"
        />
      </div>
      <img width={133} height={122} src={imgUrl} alt="nike" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b> {price} uah</b>
        </div>
        <img
          className={styles.plus}
          width={21}
          height={21}
          onClick={onChangeImg}
          src={onChange ? "/img/checked.svg" : "/img/plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
