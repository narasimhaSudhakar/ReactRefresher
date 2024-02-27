import { useDispatch } from "react-redux";
import { add } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
export const RestaurantCategory = ({
  idx,
  itemObj,
  showItems,
  setShowIndex,
  
}) => {
  let { price } = itemObj;
  let dataFromResCat = "dummyResCattt";
  console.log("inCategory  fetch> ReSMenu > Category---", dataFromResCat);
  handleClick = () => {
    return setShowIndex();
  };
  const dispatch = useDispatch();
  handleAddItem = (itemObj) => {
    return dispatch(add(itemObj));
  };
  return (
    <div>
      <hr />
      <button
        style={{ padding: "20px", border: "2px solid #000" }}
        onClick={handleClick}
      >
        {idx}-Item-{showItems ? "Opened" : "Closed"}
      </button>
      <button
        style={{
          padding: "20px",
          margin: "20px 0 ",
          backgroundColor: "#ccc",
          float: "right",
        }}
        onClick={() => {
          handleAddItem(itemObj);
        }}
      >
        Add
      </button>
      <h2>{itemObj.name}</h2>
      <h2>{itemObj.category}</h2>
      <h2>{itemObj.description}</h2>
      <h2>Approx Price:{price / 100}/-</h2>
      <img src={CDN_URL + itemObj.imageId} alt="logo"></img>
      <hr />
    </div>
  );
};
