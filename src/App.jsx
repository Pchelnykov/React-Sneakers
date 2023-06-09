import React, { useEffect } from "react";
import Drawer from "./components/Drawer";
import Header from './components/Header';
import Card from "./components/Card";

const arr = [
  { "title": "Nike Blazer Mid Suede", "price": 1240, "imgUrl": "/img/nike1.jpg" },
  { "title": "Nike Lazer", "price": 2241, "imgUrl": "/img/nike2.jpg" },
  { "title": "Nike Jordan", "price": 3290, "imgUrl": "/img/nike3.jpg" },
  { "title": "Nike Air", "price": 1810, "imgUrl": "/img/nike4.jpg" },
  { "title": "Nike Blazer Mid Suede", "price": 1240, "imgUrl": "/img/nike1.jpg" },
  { "title": "Nike Lazer", "price": 2241, "imgUrl": "/img/nike2.jpg" },
  { "title": "Nike Jordan", "price": 3290, "imgUrl": "/img/nike3.jpg" },
  { "title": "Nike Air", "price": 1810, "imgUrl": "/img/nike4.jpg" }
];


function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://647caec5c0bae2880ad111db.mockapi.io/items').then(res => res.json()).then((json) => setItems(json));
  }, [])

  const addToCart = (obj) => { setCartItems(prev => [...prev, obj]) };

  console.log(addToCart);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} cartClosed={() => setCartOpened(false)} />}
      <Header cartOpened={() => { setCartOpened(true) }} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img width={18} height={18} src="/img/search.png" alt="search" />
            <input type="text" name="search" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((items, i) => {
            return <Card title={items.title} price={items.price} imgUrl={items.imgUrl} key={i} onPlus={addToCart} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
