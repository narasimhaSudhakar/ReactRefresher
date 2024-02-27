import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ data }) => {
  const { id, name, cuisines, area, cloudinaryImageId, avgRating } = data;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img src={CDN_URL + cloudinaryImageId} alt="" width="200px" />
      <p>{id}</p>
      <h3 className="font-bold py-4 text-lg font-light" >{name}</h3>
      <p>{area}</p>
      <p>{cuisines}</p>
      <p>{avgRating}</p>
    </div>
  );
};
