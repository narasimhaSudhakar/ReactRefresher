/* import { useDispatch, useSelector } from "react-redux";
import { clear } from "../utils/cartSlice";
export const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  // console.log(cartItems, cartItems[2].name);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    return dispatch(clear());
  };
  return (
    <div className="contr">
      <button onClick={handleClearCart}>Clear Cart</button>
      <h2>Cart Component Added</h2>
    </div>
  );
};
 */

import { useState } from "react";

export const Cart = () => {
  const [preferences, setPreferences] = useState({
    darkmode: true,
    notifications: true,
  });
  const togglePreference = (preference) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };

  const [details, setDetails] = useState({
    name: " ",
    price: `0`,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Dynamic Prop-", name, value);
    return setDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };
  const [catagories, setCatagories] = useState([]);

  const addCategory = (category) => {
    console.log(catagories);
    return setCatagories([...catagories, category]);
  };
  const [cartItems, SetCartItems] = useState([]);
  const addCartItems = (item) => {
    return SetCartItems([...cartItems, item]);
  };
  const removeFromCart = (index) => {
    let updatedCarts = [...cartItems];
    updatedCarts.splice(index, 1);
    return SetCartItems(updatedCarts);
  };
  const [selectedVariant, SetSelectedVariant] = useState(null);
  const [inventory, setInventory] = useState({ red: 10, blue: 5 });
  const addToCart = () => {
    if (selectedVariant && inventory[selectedVariant] > 0) {
      setInventory({
        ...inventory,
        [selectedVariant]: inventory[selectedVariant - 1],
      });
      return console.log(inventory);
    }
  };
  const handleVariantChange = (inventory) => {
    console.log(inventory);
    return SetSelectedVariant(inventory);
  };
  return (
    <div className="cart">
      <div>
        <select
          value={selectedVariant}
          onChange={(e) => {
            handleVariantChange(e.target.value);
          }}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <button onClick={addToCart}>Add Inventory </button>
      </div>

      <div>
        <button
          onClick={() => {
            addCartItems("item");
          }}
        >
          AddToCart
        </button>
        <ul>
          {cartItems.map((item, index) => {
            return (
              <li key={index}>
                {index + 1},{item}
                <button
                  onClick={() => {
                    removeFromCart(index);
                  }}
                >
                  *
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <button
          onClick={() => {
            addCategory("NewProduct");
          }}
        >
          Add Products
        </button>
      </div>

      <div>
        Preference OBJ by Check boxes =
        <label>
          <input
            type="checkbox"
            checked={preferences.darkmode}
            onChange={() => togglePreference("darkmode")}
          />
          Dark Mode
        </label>
        <label>
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={() => togglePreference("notifications")}
          />
          Notifications
        </label>
        {/* other preferences */}
      </div>

      <div>
        <p>UseState Object Example</p>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleInputChange}
          placeholder="Enter your name here"
        />
        <input
          type="number"
          name="price"
          value={details.price}
          onChange={handleInputChange}
          placeholder="Enter your price here"
        />
      </div>
    </div>
  );
};
