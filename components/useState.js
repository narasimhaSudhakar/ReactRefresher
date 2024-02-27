import React, { useState } from "react";

function Cart() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div>
      <p>Cart Quantity: {cartQuantity}</p>
      <button onClick={() => setCartQuantity((prev) => prev + 1)}>
        Add to Cart
      </button>
    </div>
  );
}
import React, { useState } from "react";

function Product() {
  const [available, setAvailable] = useState(true);

  return (
    <div>
      <p>{available ? "Product is available" : "Product is out of stock"}</p>
      <button onClick={() => setAvailable(false)}>Out of Stock</button>
    </div>
  );
}

import React, { useState } from "react";

function ProductList() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Products"
      />
      {/* Render products based on the filter */}
    </div>
  );
}

import React, { useState } from "react";

function ProductReviews() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <button onClick={() => addReview("New review")}>Add Review</button>
    </div>
  );
}

import React, { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Authenticate user
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

import React, { useState } from "react";

function ProductList() {
  const [sortBy, setSortBy] = useState("price");

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Sort by Price</option>
        <option value="name">Sort by Name</option>
      </select>
      {/* Render products sorted by sortBy */}
    </div>
  );
}

import React, { useState } from "react";

function ProductVariants() {
  const [selectedVariant, setSelectedVariant] = useState(null);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div>
      <select
        value={selectedVariant}
        onChange={(e) => handleVariantChange(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}

import React, { useState } from "react";

function UserPreferences() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

import React, { useState } from "react";

function ShippingAddress() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter Shipping Address"
      />
    </div>
  );
}

import React, { useState } from "react";

function Checkout() {
  const [promoCode, setPromoCode] = useState("");

  const applyPromoCode = () => {
    // Apply promo code logic
  };
  return (
    <div>
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Enter Promo Code"
      />
      <button onClick={applyPromoCode}>Apply Promo</button>
    </div>
  );
}

import React, { useState } from "react";

function Product() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <p>Product Rating: {rating}</p>
      <button onClick={() => handleRatingChange(rating + 1)}>Rate Up</button>
    </div>
  );
}

import React, { useState } from "react";

function Product() {
  const [stockQuantity, setStockQuantity] = useState(10);

  return (
    <div>
      <p>Stock Quantity: {stockQuantity}</p>
    </div>
  );
}

import React, { useState } from "react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  return (
    <div>
      <button onClick={() => addToWishlist("Product")}>Add to Wishlist</button>
    </div>
  );
}

import React, { useState } from "react";

function SearchHistory() {
  const [searchHistory, setSearchHistory] = useState([]);

  const addToSearchHistory = (term) => {
    setSearchHistory([...searchHistory, term]);
  };

  return (
    <div>
      <input type="text" />
      <button onClick={() => addToSearchHistory("Search Term")}>Search</button>
    </div>
  );
}

import React, { useState } from "react";

function OrderStatus() {
  const [orderStatus, setOrderStatus] = useState("Pending");

  const updateOrderStatus = (status) => {
    setOrderStatus(status);
  };

  return (
    <div>
      <p>Order Status: {orderStatus}</p>
      <button onClick={() => updateOrderStatus("Shipped")}>Ship Order</button>
    </div>
  );
}

import React, { useState } from "react";

function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Render products for currentPage */}
      <button onClick={() => goToPage(currentPage - 1)}>Prev</button>
      <button onClick={() => goToPage(currentPage + 1)}>Next</button>
    </div>
  );
}

import React, { useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div>
      <button onClick={() => addOrder("New Order")}>Place Order</button>
    </div>
  );
}

import React, { useState } from "react";

function UserPreferences() {
  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: true,
    // other preferences
  });
  const togglePreference = (preference) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={preferences.darkMode}
          onChange={() => togglePreference("darkMode")}
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
  );
}

import React, { useState } from "react";

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const addFeaturedProduct = (product) => {
    setFeaturedProducts([...featuredProducts, product]);
  };

  return (
    <div>
      {/* Render featured products */}
      <button onClick={() => addFeaturedProduct("New Featured Product")}>
        Add Featured Product
      </button>
    </div>
  );
}

import React, { useState } from "react";

function ProductDetails() {
  const [details, setDetails] = useState({
    name: "",
    price: 0,
    // other details
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={details.name}
        onChange={handleInputChange}
        placeholder="Product Name"
      />
      <input
        type="number"
        name="price"
        value={details.price}
        onChange={handleInputChange}
        placeholder="Price"
      />
      {/* other fields */}
    </div>
  );
}

import React, { useState } from "react";

function GiftCards() {
  const [giftCards, setGiftCards] = useState([]);

  const addGiftCard = (card) => {
    setGiftCards([...giftCards, card]);
  };

  return (
    <div>
      {/* Render gift cards */}
      <button onClick={() => addGiftCard("New Gift Card")}>
        Add Gift Card
      </button>
    </div>
  );
}

import React, { useState } from "react";

function Discounts() {
  const [discounts, setDiscounts] = useState([]);

  const addDiscount = (discount) => {
    setDiscounts([...discounts, discount]);
  };

  return (
    <div>
      {/* Render discounts */}
      <button onClick={() => addDiscount("New Discount")}>Add Discount</button>
    </div>
  );
}

import React, { useState } from "react";

function ProductCategories() {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div>
      {/* Render categories */}
      <button onClick={() => addCategory("New Category")}>Add Category</button>
    </div>
  );
}

import React, { useState } from "react";

function SubscriptionPlans() {
  const [plans, setPlans] = useState([]);

  const addPlan = (plan) => {
    setPlans([...plans, plan]);
  };

  return (
    <div>
      {/* Render subscription plans */}
      <button onClick={() => addPlan("New Plan")}>Add Plan</button>
    </div>
  );
}

import React, { useState } from "react";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ name: "Product", quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
}

import React, { useState } from "react";

function Checkout() {
  const [addresses, setAddresses] = useState({ billing: "", shipping: "" });

  const updateAddress = (type, value) => {
    setAddresses({ ...addresses, [type]: value });
  };

  return (
    <div>
      <input
        type="text"
        value={addresses.billing}
        onChange={(e) => updateAddress("billing", e.target.value)}
        placeholder="Billing Address"
      />
      <input
        type="text"
        value={addresses.shipping}
        onChange={(e) => updateAddress("shipping", e.target.value)}
        placeholder="Shipping Address"
      />
    </div>
  );
}

import React, { useState } from "react";

function ProductVariants() {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [inventory, setInventory] = useState({ red: 10, blue: 5 });

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const addToCart = () => {
    if (selectedVariant && inventory[selectedVariant] > 0) {
      // Reduce inventory when adding to cart
      setInventory({
        ...inventory,
        [selectedVariant]: inventory[selectedVariant] - 1,
      });
      // Add to cart logic
    }
  };

  return (
    <div>
      <select
        value={selectedVariant}
        onChange={(e) => handleVariantChange(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      // Successful login logic
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

import React, { useState } from "react";

function ProductReviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  const addReview = (review, newRating) => {
    setReviews([...reviews, review]);
    setRating(
      (prevRating) =>
        (prevRating * reviews.length + newRating) / (reviews.length + 1)
    );
  };

  return (
    <div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <p>Average Rating: {rating}</p>
      <button onClick={() => addReview("New review", 5)}>Add Review</button>
    </div>
  );
}

import React, { useState } from "react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToWishlist("Product")}>Add to Wishlist</button>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToFavorites("Product")}>
        Add to Favorites
      </button>
    </div>
  );
}

import React, { useState } from "react";

function Profile() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    // other fields
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save user profile logic
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
          {/* other editable fields */}
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          {/* other non-editable fields */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", quantity: 5 },
    { id: 2, name: "Product B", quantity: 10 },
    { id: 3, name: "Product C", quantity: 8 },
    { id: 4, name: "Product D", quantity: 18 },
    { id: 5, name: "Product E", quantity: 22 },
    { id: 6, name: "Product F", quantity: 6 },
    // Add more products as needed
  ]);
  const [sortOrder, setSortOrder] = useState("asc");
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
  const handleAddQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.quantity - b.quantity;
    } else {
      return b.quantity - a.quantity;
    }
  });
  return (
    <div>
      <button onClick={toggleSortOrder}>Toggle Sort Order</button>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            <p>
              {product.name} - {product.quantity}
            </p>
            <button onClick={() => handleAddQuantity(product.id)}>
              Add Quantity
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
