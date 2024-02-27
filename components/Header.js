import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { onlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const Header = () => {
//   let [btnNameReact, SetBtnNameReact] = useState("LogIn");
//   let { loggedInUser } = useContext(UserContext);
//   console.log(loggedInUser);
//   // console.log("header renders");
//   // No dependency array calls => useEffect calls on  every render.
//   // Empty dependency array [] => useEffect calls on only initial render.
//   // filled dependency array [stateVar] => useEffect calls on every dependency change

//   const cartItems = useSelector((store) => {
//     return store.cart.items;
//   });
//   /* Dont initiate hooks in if else blocks and loop blocks */
//   useEffect(() => {
//     // console.log("effect renders");
//   }, [btnNameReact]);
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img src={LOGO_URL} alt="header_logo" width="120px" />
//       </div>
//       <div className="flex items-center">
//         <ul className="flex">
//           <li className="link">
//             <Link to="/">Online Status:{onlineStatus ? "✅" : "🔴"}</Link>
//           </li>
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart({cartItems.length} items)</Link>
//           </li>
//           <li>
//             <h1 className="text-xl font-bold">{loggedInUser}</h1>
//             <button
//               style={{ padding: "10px 20px" }}
//               onClick={() => {
//                 btnNameReact === "LogIn"
// //                  ? SetBtnNameReact("LogOut")
//                   : SetBtnNameReact("LogIn");
//               }}
//             >
//               {btnNameReact}
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

export const Header = () => {
  let [btnName, setBtnName] = useState("LogIn");
  let [onlineStatus, setOnlineStatus] = useState("Online");
  return (
    <div className="header">
      <ul>
        <li></li>
        <li>
          <span
            onClick={() => {
              onlineStatus === "Online"
                ? setOnlineStatus("🍏 ")
                : setOnlineStatus("🍎 ");
            }}
          >
            {onlineStatus}
          </span>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/examples">Examples </Link>
          <Link to="/contact">Contact </Link>
          <Link to="/cart">Cart </Link>
          <Link
            to="/"
            onClick={() => {
              btnName === "LogIn" ? 
              setBtnName("LogOut") : setBtnName("LogIn");
            }}
          >
            {btnName}
          </Link>
        </li>
      </ul>
    </div>
  );
};
