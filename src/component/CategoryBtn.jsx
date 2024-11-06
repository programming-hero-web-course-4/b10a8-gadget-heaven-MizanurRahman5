import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBtn = ({ category }) => {
  return (
    <ul className="menu rounded-xl bg-white mt-20 h-[400px] text-xl flex flex-col gap-4 p">
      {category.map((category) => (
        <NavLink
          className="p-2 bg-gray-300 rounded-xl text-center"
          to={`/category/${category.category}`}
          key={category.id}
        >
          {category.category}
        </NavLink>
      ))}
    </ul>
  );
};

export default CategoryBtn;
