/* import { useState, useEffect } from "react";
import { SWIGGY_MENU_API } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, SetResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_MENU_API + resId);
      if (!data.ok) {
        throw new Error("failed to fetch data");
      }
      const jsonApiData = await data.json();
      return SetResInfo(jsonApiData);
    } catch (error) {
      console.error("Error Fetching data:", error);
    }
  };
  return resInfo;
};
 */

import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch(SWIGGY_MENU_API + resId);
    let jsonData = await data.json();
    setResInfo(jsonData.data);
    console.log(resInfo);
  };
  return resInfo;
};
