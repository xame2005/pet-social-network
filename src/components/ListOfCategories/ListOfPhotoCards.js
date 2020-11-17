import React from "react";
import { PhotoCard } from "../PhotoCards";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
};
