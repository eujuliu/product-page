import Image from "next/image";
import { useState } from "react";
import { useGetWindowWidth } from "./useGetWindowWidth";

export const useSwitchImage = () => {
  const [imageNumber, setImageNumber] = useState<number>(1);
  const { windowWidth } = useGetWindowWidth();

  const returnSpecificImage = (imageNumber: number) => {
    switch (imageNumber) {
      case 1: {
        return (
          <Image
            src="/image-product-1.jpg"
            alt="Sneaker Image"
            width={windowWidth > 550 ? 550 : windowWidth}
            height={windowWidth > 550 ? 550 : windowWidth}
          />
        );
      }
      case 2: {
        return (
          <Image
            src="/image-product-2.jpg"
            alt="Sneaker Image"
            width={windowWidth > 550 ? 550 : windowWidth}
            height={windowWidth > 550 ? 550 : windowWidth}
          />
        );
      }
      case 3: {
        return (
          <Image
            src="/image-product-3.jpg"
            alt="Sneaker Image"
            width={windowWidth > 550 ? 550 : windowWidth}
            height={windowWidth > 550 ? 550 : windowWidth}
          />
        );
      }
      case 4: {
        return (
          <Image
            src="/image-product-4.jpg"
            alt="Sneaker Image"
            width={windowWidth > 550 ? 550 : windowWidth}
            height={windowWidth > 550 ? 550 : windowWidth}
          />
        );
      }
    }
  };

  return {
    imageNumber,
    setImageNumber,
    returnSpecificImage,
  };
};
