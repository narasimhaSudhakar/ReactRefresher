import { useState } from "react";

export const About = () => {
  const [theme, setTheme] = useState("light");
  const [gender, setGender] = useState();
  let [promo, setPromo] = useState("");
  const [plans, SetPlan] = useState([]);
  const [discounts, SetDiscount] = useState([]);
  const [reviewItem, setReviewItem] = useState();
  const [details, SetDetails] = useState({
    name: "",
    price: 0,
  });

  const genderhandle = (gender) => {
    //passing  the selected event value to state is very imp...
    setGender(gender);
    return console.log(gender);
  };
  const applyPromo = () => {
    promo = " DISCOUNT-200/- ";
    return setPromo(promo);
  };
  const addReview = (review) => {
    console.log(review);
    return review;
  };
  const AddPlan = (plan) => {
    SetPlan([...plans, plan]);
  };
  const addDiscount = (discount) => {
    return SetDiscount([...discounts, discount]);
  };
  const handleChange = (e) => {
    const { name, price } = e.target;
    return SetDetails((prevDetails) => {
      return { ...prevDetails, [name]: price };
    });
  };
  return (
    <div className="about">
      <h1>About</h1>
      <div>
        <input
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          placeholder="product name"
          style={{ border: "1px solid" }}
        /> {details.name}
        <input
          style={{ border: "1px solid" }}
          type="number"
          name="price"
          value={details.price}
          onChange={handleChange}
          placeholder="price"
        /> {details.price}
      </div>
      <div>
        <button onClick={() => addDiscount("Discount added...")}>
          Add Discount
        </button>
        {discounts}
      </div>
      <div>
        <button
          onClick={() => {
            AddPlan("New Plan");
          }}
        >
          Add Plan
        </button>{" "}
        {plans}
        <ul style={{ border: "1px solid #999" }}>
          {plans.map((plan, index) => (
            <li key={index}>
              {plan},{index + 1}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          id="add review"
          value={reviewItem}
          onChange={(e) => {
            setReviewItem(e.target.value);
          }}
        />
        <button onClick={addReview}>Add Review</button>
        <ul>
          {/* {reviews.map((reviewObj) => {
            return <li>{reviewObj}</li>;
          })} */}
        </ul>
      </div>
      <div>
        <p>{theme}</p>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Change Theme
        </button>
      </div>

      <div>
        <select
          value={gender}
          onChange={(e) => {
            return genderhandle(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">FeMale</option>
        </select>
      </div>

      <div>
        <input
          type="text"
          value={promo}
          placeholder=" enter your promo"
          onChange={(e) => {
            return setPromo(e.target.value);
          }}
        />
        <button onClick={applyPromo}>Apply Promo</button>
      </div>
    </div>
  );
};
