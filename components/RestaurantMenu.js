import { useParams } from "react-router-dom";
import { RestaurantCategory } from "./RestaurantCategroy2";
import { useRestaurantMenu } from "../utils/useRestaurant";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { SWIGGY_MENU_API, CDN_URL } from "../utils/constants";

export const RestaurantMenu = () => {
  let resId = useParams();
  let [resInfo, setResInfo] = useState(null);
  // console.log(resId)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_API + resId.resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  if (resInfo === null) return <Shimmer />;

  let {
    name,
    avgRating,
    costForTwoMessage,
    areaName,
    cloudinaryImageId,
    labels,
    aggregatedDiscountInfo: { descriptionList },
    orderabilityCommunication,
    // aggregatedDiscountInfoV3: { header },
    slugs: { city, restaurant },
  } = resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="ResCategory">
      <h2>ResCategory</h2>
      <ul>
        <li 
          style={{
            background: "#000",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "22px",
            padding: "0 10px",
          }}
        >
          {name}
        </li>
        <li>{avgRating}</li>
        <li>{costForTwoMessage}</li>
        {descriptionList.map((ele) => {
          return (
            <li
              key={ele.name}
              style={{
                background:'#000',
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {ele.meta}
              {/* {header} */}
            </li>
          );
        })}
        {labels.map((ele) => {
          return <li> Address: {ele.message}</li>;
        })}
        <li>
          {restaurant}-{city}
        </li>
        <li>
          <img src={CDN_URL + cloudinaryImageId} width="200px" />
        </li>
      </ul>
    </div>
  );
};
