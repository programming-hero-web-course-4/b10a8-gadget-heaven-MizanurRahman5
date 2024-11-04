import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBtn = ({ category }) => {
  return (
    <ul className="menu bg-white text-xl flex flex-col gap-4 w-56">
      {
        category.map(category => (
            <NavLink className='p-2' to={`/category/${category.category}`} key={category.id}>{category.category}</NavLink>
        ))
      }
    </ul>
  );
};

export default CategoryBtn;
