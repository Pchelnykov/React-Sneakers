function Header(props) {

    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img className="mr-15" height={40} width={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.cartOpened}><img height={18} width={18} src="/img/cart.svg" alt="cart" />
                    <span>1250 uah</span></li>
                <li><img height={18} width={18} src="/img/user.svg" alt="user" /></li>
            </ul>
        </header>
    )
}

export default Header;