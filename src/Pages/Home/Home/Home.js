import React from "react";
import Warhouses from "../../Warehouses/Warehouses";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner></Banner>
      </div>
      <div className="items">
        <Items></Items>
      </div>
      <div>
        <Warhouses></Warhouses>
      </div>
    </div>
  );
};

export default Home;
