import React from "react";
import Category from "../category";
import { List, Item } from "../ListOfCategories/styles";
import { categories } from "../../../api/db.json";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
