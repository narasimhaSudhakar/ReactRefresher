/* import { useEffect, useState } from "react";

import { SWIGGY_API } from "../utils/constants";
import { Card } from "./Card";

export const Products = () => {
  let [products, setProducts] = useState();
  let [listOfRestaurants, SetListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(SWIGGY_API);
    let jsonData = await data.json();
    SetListOfRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    return jsonData.data.cards[1].card.card.gridElements.infoWithStyle
      .restaurants;
  };
  const handleClick = async () => {
    try {
      let data = await fetchData();
      let jsonData = await data.json();
      setProducts(data);
      //   SetListOfRestaurants(
      //     jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      //   );
      console.log("clicked", data);
    } catch {
      console.error("fetch error", error);
    }
    return;
  };
  return (
    <div className="products">
      <button
        onClick={handleClick}
        style={{ border: "1px solid #000", padding: "5px 10px" }}
      >
        {" "}
        Get Restaurants
      </button>
      {listOfRestaurants.map((resObj) => {
        return <Card data={resObj.info} />;
      })}
    </div>
  );
};
 */

import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

import { Card } from "./Card";
import { RestaurantMenu } from "./RestaurantMenu";

export const Products = () => {
  let [listOfRestaurants, SetListOfRestaurants] = useState([]);
  let [filteredRestaurants, SetFilteredRestaurants] = useState([]);
  let [searchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(SWIGGY_API);
    let jsonData = await data.json();
    SetListOfRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    SetFilteredRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  handleClick = () => {
    let topRated = listOfRestaurants.filter((ele) => {
      console.log("fitlelle", ele.info.avgRating);
      return ele.info.avgRating > 4.4;
    });
    return SetListOfRestaurants(topRated);
    console.log(
      filteredRestaurants[0].info.avgRating,
      filteredRestaurants[0].info.name
    );
    filteredRest[0].info.avgRating;
  };
  return (
    <div className="products">
      <input
        value={searchText}
        placeholder=" Search Here"
        onChange={(e) => {
          SetSearchText(e.target.value);
        }}
        style={{
          margin: "0 10px 0 10px",
          padding: "3px 0",
          border: "1px solid #333",
        }}
      />
      <button
        style={{
          border: "1px solid #ccc",
          padding: "5px 10px",
          margin: "5px 0 0",
        }}
        onClick={() => {
          const filteredRes = listOfRestaurants.filter((ele, index) => {
            return ele.info.name.toLowerCase().includes(searchText.toLowerCase());
          });
          SetFilteredRestaurants(filteredRes);
        }}
      >
        Search
      </button>
      <button
        onClick={handleClick}
        style={{
          border: "1px solid #ccc",
          padding: "5px 10px",
          margin: "5px 0 0",
        }}
      >
        Top Rated
      </button>

      {filteredRestaurants.map((restaurant, index) => {
        return (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant?.info?.id}
          >
            <Card data={restaurant.info} number={index} />
          </Link>
        );
      })}
    </div>
  );
};
