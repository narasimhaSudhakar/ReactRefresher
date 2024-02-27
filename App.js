import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { FunComp } from "./FunctionalComp";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { FecthData } from "./components/Fetch";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { Home } from "./components/Home";
import { Examples } from "./components/Examples";
import { Shimmer } from "./components/Shimmer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./app.css";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { Cart } from "./components/Cart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
/* 
const styleObj = {
  backgroundColor: "red",
};
let Heading1 = React.createElement("span", {}, "Heading1");
let Heading2 = React.createElement("span", {}, "Heading2");
let Heading3 = (
  <span id="title" key="h2" style={styleObj}>
    Heading Method
  </span>
);
 */
/* const Applayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Sudhakar S",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
 */
/* const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
 */
// let title = <h3>small letter</h3>;

/* const MainComponent = () => {
  return (
    <span style={styleObj} key="h1">
      {title}---{Heading3}---{Heading1}---{Heading2}
    </span>
  );
}; */

// let mainContainer = React.createElement("h1", {}, [
//   <MainComponent key="h1" />,
//   //   <FunComp />,
//   /*  Heading1,
//   Heading2,
//   Heading3, */
// ]);

/* let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); */
// root.render(Heading3);

/* *** Version-2 *** */
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "examples", element: <Examples /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
