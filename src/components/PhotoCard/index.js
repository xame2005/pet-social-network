import React, { useEffect, useRef, useState } from "react";

import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(
    function () {
      const observer = new window.IntersectionObserver(function (entries) {
        {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            console.log("Sí");
            setShow(true);
            observer.disconnect();
          }
          console.log(isIntersecting);
        }
      });
      observer.observe(element.current);
    },
    [element.current]
  );
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" />
            {likes} Likes!
          </Button>
        </>
      )}
    </Article>
  );
};
