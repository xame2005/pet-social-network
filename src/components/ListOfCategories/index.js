import React from "react";
import Category from "../category";

export const ListOfCategories = () => {
  return (
    <ul>
      {[1, 2].map((category) => (
        <li>
          <Category />
        </li>
      ))}
    </ul>
  );
};
