import { CDN_URL } from "../utils/constants";

export const Card = ({ data, number }) => {
  let { id, name, city, areaName, locality, cuisines, cloudinaryImageId } =
    data;
  return (
    <div
      className="card"
      style={{
        border: "1px solid #000",
        padding: "10px 20px",
        margin: "10px 0",
      }}
    >
      <p style={{background:"#ccc"}}>
        {++number}.<strong> {name} -  {"ID:"}{id}</strong>
      </p>
  
      <img
        src={CDN_URL + cloudinaryImageId}
        style={{
          width: "120px",
          float: "right",
          position: "relative",
          top: "10px",
          zIndex:'-2'
        }}
      />
      <p>{cuisines.join('-')}</p>
      <p> {areaName}</p>
      <p>{city}</p>
      <p>{locality}</p>
    </div>
  );
};
