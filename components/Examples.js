import { useState } from "react";

export const Examples = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", Quantity: 10 },
    { id: 2, name: "Product 2", Quantity: 13 },
    { id: 3, name: "Product 3", Quantity: 15 },
  ]);
  const [sortOrder, SetSortOrder] = useState("asc");
  const toggleSortOrder = () => {
    return SetSortOrder((prevOrder) => {
      console.log(prevOrder);
      return prevOrder === "asc" ? "desc" : "asc";
    });
  };
  const handleAddQuantity = (id) => {
    return setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        return product.id === id
          ? { ...product, Quantity: product.Quantity + 1 }
          : product;
      });
    });
  };
  const sortedProdcuts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.Quantity - b.Quantity;
    } else {
      return b.Quantity - a.Quantity;
    }
  });

  let [userInfo, setUserInfo] = useState({
    name: "NarasimhaSudhakar",
    email: "nss@gmail.com",
  });
  let [isEditing, setIsEditing] = useState(false);
  let handleInput = (e) => {
    let { name, value } = e.target;
    return setUserInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  let handleSave = () => setIsEditing(false);
  const [wishList, setWishlist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const addWishList = (item) => {
    return setWishlist([...wishList, item]);
  };
  const addFavorites = (item) => {
    return setFavorites([...favorites, item]);
  };
  const fun = async () => {
    return "hellow";
  };
  fun();
  async function foo() {
    let val = await "hell";
    console.log(val)
  }
  foo()
  
  return (
    <div className="cart">
      <div>
        <div className="division">
          WishList
          <button
            onClick={() => {
              addWishList("wished Product");
            }}
          >
            Add to WishList
          </button>
          <ul>
            {wishList.map((obj, index) => {
              return (
                <li key={index}>
                  {obj},{index}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="division">
          Favorites
          <button
            onClick={() => {
              return addFavorites("added to favorites");
            }}
          >
            Add to Favorites
          </button>
          <ul>
            {favorites.map((obj, index) => {
              return (
                <li key={index}>
                  {obj},{index}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        {isEditing ? (
          <div>
            {" "}
            <input
              type="text"
              name="name"
              style={{ border: "1px solid #000" }}
              value={userInfo.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInput}
              style={{ border: "1px solid #000" }}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <p>Name: {userInfo.name}</p>
            <p>Edit: {userInfo.email}</p>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
          </div>
        )}
      </div>

      <div>
        <ul>
          {sortedProdcuts.map((product) => {
            return (
              <li key={product.id}>
                {product.name}, {product.Quantity}
                <button
                  onClick={() => {
                    return handleAddQuantity(product.id);
                  }}
                >
                  Add
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={toggleSortOrder}>Toggle Sort Order</button>
      </div>
      {}
    </div>
  );
};
