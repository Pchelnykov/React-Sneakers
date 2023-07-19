import React, { useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [changeValue, setChangeValue] = React.useState("");
  const [isFavorite, setIsFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    // fetch('https://647caec5c0bae2880ad111db.mockapi.io/items').then(res => res.json()).then((json) => setItems(json));
    axios
      .get("https://647caec5c0bae2880ad111db.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://647caec5c0bae2880ad111db.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const addToCart = (obj) => {
    axios.post("https://647caec5c0bae2880ad111db.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://647caec5c0bae2880ad111db.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (isFavorite.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://647caec5c0bae2880ad111db.mockapi.io/favorites/${obj.id}`
        );
        // setIsFavorite((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://647caec5c0bae2880ad111db.mockapi.io/favorites",
          obj
        );
        setIsFavorite((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const onChangeValue = (event) => setChangeValue(event.target.value);

  return (
    <div className="wrapper clear">
      <Header
        cartOpened={() => {
          setCartOpened(true);
        }}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              changeValue={changeValue}
              onChangeValue={onChangeValue}
              setChangeValue={setChangeValue}
              addToCart={addToCart}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              addToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites items={isFavorite} addToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
      {cartOpened && (
        <Drawer
          items={cartItems}
          cartClosed={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
    </div>
  );
}

export default App;
