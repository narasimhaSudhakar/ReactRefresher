import { useEffect, useState } from "react";
import { mockrestaurantList } from "../MockData/restaurantList";
import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  console.log(filterData);
  return filterData;
}

export const Body = () => {
  let [restaurants, setRestaurants] = useState(mockrestaurantList);
  let [searchText, setSearchText] = useState("");
  let [apiRes, SetApiRes] = useState();
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    let apiData = await fetch(SWIGGY_API);
    let jsonApiData = await apiData.json();
    apiRes =
      jsonApiData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(
      "jsonApiData--",
      jsonApiData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[3].info.name
    );
    // setRestaurants(jsonApiData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  // SetApiRes(apiRes)
  return (
    <div className="BodyContainer">
      <input
        type="text"
        name=""
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText, "--", e.target.value);
        }}
        placeholder="Search"
        style={{ padding: "20px 40px 20PX 10PX", margin: "20px" }}
      />
      <button
        style={{ padding: "20px 40px", margin: "20px" }}
        onClick={() => {
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
          console.log(data);
        }}
      >
        Search
      </button>

      <button
        className="filteredBtn"
        style={{ padding: "20px 40px", margin: "20px" }}
        onClick={() => {
          console.log("clicked");
          let filteredList = restaurants.filter((restaurant) => {
            return restaurant.data.avgRating > 4;
          });
          console.log(filteredList);
          setRestaurants(filteredList);
        }}
      >
        Top Rated
      </button>
      <div className="cards">
        {restaurants.map((obj) => {
          return <RestaurantCard key={obj.data.id}
           data={obj.data} />;
        })}
      </div>
    </div>
  );
};
