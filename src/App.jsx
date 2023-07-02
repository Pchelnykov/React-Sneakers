import React from "react";
import Drawer from "./components/Drawer";
import Header from './components/Header';
import Card from "./components/Card";
import axios from "axios";

// const arr = [
//   { "title": "Nike Blazer Mid Suede", "price": 1240, "imgUrl": "/img/nike1.jpg" },
//   { "title": "Nike Lazer", "price": 2241, "imgUrl": "/img/nike2.jpg" },
//   { "title": "Nike Jordan", "price": 3290, "imgUrl": "/img/nike3.jpg" },
//   { "title": "Nike Air", "price": 1810, "imgUrl": "/img/nike4.jpg" },
//   { "title": "Nike Blazer Mid Suede", "price": 1240, "imgUrl": "/img/nike1.jpg" },
//   { "title": "Nike Lazer", "price": 2241, "imgUrl": "/img/nike2.jpg" },
//   { "title": "Nike Jordan", "price": 3290, "imgUrl": "/img/nike3.jpg" },
//   { "title": "Nike Air", "price": 1810, "imgUrl": "/img/nike4.jpg" }
// ];


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [changeValue, setChangeValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);

  const onChangeValue = (event) => setChangeValue(event.target.value);

  React.useEffect(() => {
    // fetch('https://647caec5c0bae2880ad111db.mockapi.io/items').then(res => res.json()).then((json) => setItems(json));
    axios.get('https://647caec5c0bae2880ad111db.mockapi.io/items').then((res) => { setItems(res.data) });
    // axios.get('https://647caec5c0bae2880ad111db.mockapi.io/cart').then((res) => { setCartItems(res.data) });
  }, [])

  const addToCart = (obj) => {
    // axios.post('https://647caec5c0bae2880ad111db.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  };

  const addToFavorites = (obj) => {
    axios.post('https://647caec5c0bae2880ad111db.mockapi.io/favorites', obj);
    setFavorites(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} cartClosed={() => setCartOpened(false)} />}
      <Header cartOpened={() => { setCartOpened(true) }} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{changeValue ? `Поиск по запросу: ${changeValue}` : 'Все кроссовки'}</h1>
          <div className="search">
            <img width={18} height={18} src="/img/search.png" alt="search" />
            <input type="text" name="search" placeholder="Поиск..." onChange={onChangeValue} value={changeValue} />
            {changeValue && <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => { setChangeValue('') }} />}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter((item) => { return item.title.toLowerCase().includes(changeValue.toLowerCase()) }).map((items, i) => {
            return <Card title={items.title} price={items.price} imgUrl={items.imgUrl} key={i} onPlus={addToCart}
              onFavorites={addToFavorites} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
