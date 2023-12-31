import React from 'react';
import styles from './Card.module.scss';

function Card({ onPlus, imgUrl, title, price, onFavorites }) {
    const [onChange, setOnChange] = React.useState(false);
    const [onFavorite, setOnFavorite] = React.useState(false);

    const onChangeImg = () => {
        onPlus({ imgUrl, title, price });
        setOnChange(!onChange)
    }

    const onChangeFavorite = () => {
        onFavorites({ imgUrl, title, price })
        setOnFavorite(!onFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorites}>
                <img src={onFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" onClick={onChangeFavorite} />
            </div>
            <img width={133} height={122} src={imgUrl} alt="nike" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b> {price} uah</b>
                </div>
                <img className={styles.plus} width={21} height={21} onClick={onChangeImg} src={onChange ? "/img/checked.svg" : '/img/plus.svg'} alt="Plus" />
            </div>
        </div >
    )
}

export default Card;