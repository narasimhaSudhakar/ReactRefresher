import { useContext, useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { CDN_URL, SWIGGY_API } from "../utils/constants";
import { mockrestaurantList } from "../MockData/restaurantList";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { RestaurantMenu } from "./RestaurentMent";
const Card = ({ data, dummy }) => {
  const { loggedInUser,setUserName } = useContext(UserContext);

  let { id, name, avgRating, areaName, cloudinaryImageId } = data;
  const cardDummy = dummy;
  console.log("in card---", cardDummy);
  return (
    <div className="card">
      <img src={CDN_URL + cloudinaryImageId} width="300px" />
      <p className="font-bold py-4 text-2xl">Restaurant Name:{name}</p>
      <p>
        Rating: {avgRating} <b>{areaName}</b>
      </p>
      User Name = {loggedInUser}
    </div>
  );
};
function filteredData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((resObj) => {
    return resObj.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredData;
}
export const FecthData = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  let mockData =
    mockrestaurantList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  const dummy = "dummy Data from Body(fetch)";

  let [restaurantList, SetRestaurantList] = useState([]);
  let [filteredRestaurants, SetfilteredRestaurants] = useState([]);
  let [searchText, SetSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  console.log(loggedInUser);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonApiData = await data.json();

    SetRestaurantList(
      jsonApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    SetfilteredRestaurants(
      jsonApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="container font-bold py-4 text-lg">
      <button
        style={{ padding: "20px 40px", margin: "10px 20px" }}
        onClick={() => {
          let filteredRest = restaurantList.filter((obj) => {
            return obj.info.avgRating > 4.2;
          });
          return SetfilteredRestaurants(filteredRest);
        }}
      >
        Top Rated
      </button>
      <input
        style={{ border: "1px solid #ccc" }}
        value={loggedInUser}
        onChange={(e) => {
          return setUserName(e.target.value);
        }}
      />

      <input
        type="text"
        style={{
          padding: "20px 10px 20px 10px",
          margin: "10px 0px",
          border: "1px solid #ccc",
        }}
        value={searchText}
        onChange={(e) => {
          SetSearchText(e.target.value);
        }}
      />
      <button
        style={{ padding: "20px 10px 20px 10px", margin: "10px 0px" }}
        className="bg-red-500 font-bold"
        onClick={() => {
          // const data = filteredData(searchText, restaurantList); // 2nd way to filter data
          const filteredList = restaurantList.filter((res) => {
            return res.info.name
              .toLowerCase()
              .includes(searchText.toLowerCase());
          });
          return SetfilteredRestaurants(filteredList);
        }}
      >
        Search
      </button>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((obj) => {
          {
            console.log("----", obj.info);
          }
          return (
            <Link to={"/restaurants/" + obj.info.id}>
              <Card key={obj.info.id} data={obj.info} dummy={dummy} />
            </Link>
          );
        })}
        <RestaurantMenu dummy={dummy} />
      </div>
    </div>
  );
};
