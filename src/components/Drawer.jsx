function Drawer({ items = [], cartClosed, onRemove }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">Корзина  <img onClick={cartClosed} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
                <div className="items">
                    {items.map((obj, id) => (
                        <div key={id} className="cart__item d-flex align-center mb-20">
                            <div style={{ backgroundImage: `url(${obj.imgUrl})` }} className="cartItemImg"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} uah</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => {onRemove(obj.id)}} />
                        </div>
                    ))}
                </div>
                <div className="cardTotalBlock">
                    <ul className="total__block">
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 331 uah</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%</span>
                            <div></div>
                            <b>190 uah</b>
                        </li>
                    </ul>
                    <button className="green__button">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;