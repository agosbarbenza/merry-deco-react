import React from "react";
import { Link } from "react-router-dom";
export default function Main() {
  const categories = [
    {
      id: 1,
      name: "Lights",
      class: "imgLights",
      category: "lights",
    },
    {
      id: 2,
      name: "Ornaments",
      class: "imgOrnaments",
      category: "ornaments",
    },
    { id: 3, name: "Trees", class: "imgTrees", category: "trees" },
    { id: 4, name: "Home Decor", class: "imgDecor", category: "homedecor" },
  ];
  return (
    <div className="mainContainer">
      <div className="mainImgContainer">
        <div className="titleContainerMain">
          <p className="mainTitle">'Tis the season</p>
          <p className="mainSubTitle">
            Get ready for the jolliest time of the year! Shop our entire renewed
            catalog.
          </p>
          <Link className="titleStyleNav" to={`category/all`}>
            <div className="shopNow">Shop now</div>
          </Link>
        </div>
      </div>
      <div className="imgCategoriesContainer">
        {categories.map((item, key) => (
          <Link
            className="titleStyleNav"
            to={`/category/${item.category}`}
            key={item.id}
          >
            <div className={`imgSize ${item.class}`}>
              <p className="mainLights">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="lineSeparator"></div>
      <p className="seeAll">Featured products</p>
    </div>
  );
}
