import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurant";
import { RestaurantCategory } from "./RestaurantCategroy";

export const RestaurantMenu = ({ dummy }) => {
  let fromResCat = dummy
  console.log("in resMenu ", fromResCat);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  // let areaName = resInfo.data.cards[0].card.card.info.areaName
  // let name = resInfo.data.cards[0].card.card.info.name
  // Check if resInfo is not null before accessing its properties
  if (
    !resInfo ||
    !resInfo.data ||
    !resInfo.data.cards ||
    resInfo.data.cards.length === 0
  ) {
    return <div>Loading...</div>; // or display an appropriate loading indicator
  }

  const { name, costForTwo, areaName, avgRating, cuisines, city, locality } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  // console.log( resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  let categories =
    resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  categories.filter((c) => {
    return (
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(categories);
  let itemCards =
    resInfo?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  return (
    <div className="menu text-center" style={{ margin: "20px 30px" }}>
      <h1>
        Restaurant Name: {name}
        <br />
        {locality}-{areaName}: {resId}
      </h1>
      <ul>
        <li>Cost For Two: {costForTwo / 100}/-</li>
        <li>{cuisines.join(" , ")}</li>
        <li>Rating:{avgRating}</li>
        <li>{city}</li>
      </ul>
      <br />
      <h2 className="font-3xl">---ITEMS---</h2>
      <div className="items">
        {itemCards.map((item, index) => {
          return (
            <RestaurantCategory
              dummy={fromResCat}
              idx={index}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
              itemObj={item.card.info}
            />
          );
        })}
      </div>
    </div>
  );
};
