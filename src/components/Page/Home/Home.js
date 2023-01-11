import React from "react";
import Collection from "../../NoPage/Collection";
import TopBrand from "../../NoPage/TopBrand";
import TopCatagory from "../../NoPage/TopCatagory";

const Home = () => {
  return (
    <div>
      <div>
        <TopCatagory></TopCatagory>
      </div>
      <div>
        <Collection></Collection>
      </div>
      <TopBrand></TopBrand>
    </div>
  );
};

export default Home;
