import { useState, useEffect } from "react";
export const Contact = () => {
  let [count, SetCount] = useState(1);
  let [toggle, SetToggle] = useState("true");
  const [featuredProduct, SetFeaturedProduct] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    price: "",
  });
  useEffect(() => {
    console.log("useEffect rendered");
  }, [count]);
  const addFeatureProduct = (product) => {
    return SetFeaturedProduct([...featuredProduct, product]);
  };
  const handleProduct = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
    console.log(details);
  };
  const [cartItems, SetCartItems] = useState([]);
  const addItems = (item) => {
    console.log('ttt')
    return SetCartItems([...cartItems, item]);
  };
  return (
    <div className="contactContainer contact">
      <h2> Contact Page</h2>
      <div>
        Cart:{cartItems.name}
        <ul>
          {cartItems.map((item, index) => {
            <li key={index}>
              {item.name} -- {item.quantity}
               <button onClick={(e)=>{
                  removeFromCart()
               }}>Remove</button>
            </li>;
          })}
        </ul>
        <button
          onClick={() => {
           return  addItems({ name: "mobile", quantity: 1 });
          }}
        >
          Add Items
        </button>
      </div>

      <div></div>

      <div>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleProduct}
          placeholder=" enter product name "
        />
        <input
          type="number"
          name="price"
          value={details.price}
          onChange={handleProduct}
          placeholder=" enter price here"
        />
        <button>Add Products</button>
      </div>

      <div style={{ textAlign: "left" }}>
        <h1>{count}</h1>
        <button
          style={{ padding: "10px 20px", border: "1px solid #ccc" }}
          onClick={() => {
            return SetCount(++count);
          }}
        >
          Add
        </button>
        <h2> {toggle}</h2>
        <button
          onClick={() => {
            SetToggle(
              toggle === "false" ? (SetToggle = "true") : (SetToggle = "false")
            );
          }}
          style={{ padding: "10px 20px", border: "1px solid #ccc" }}
        >
          Change
        </button>
      </div>

      <div>
        <button onClick={(e) => addFeatureProduct("NewProduct")}>
          Click me.
        </button>
        {featuredProduct}
      </div>
    </div>
  );
};
