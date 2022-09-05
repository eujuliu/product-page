import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import NextIcon from "@/assets/images/icon-next.svg";
import PreviousIcon from "@/assets/images/icon-previous.svg";

import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";
import { useSwitchImage } from "@/hooks/useSwitchImage";

import styles from "./styles.module.css";

interface ProductImageProps {
  imageModalIsVisible: boolean;
  setImageModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const ProductImage: NextPage<ProductImageProps> = ({
  imageModalIsVisible,
  setImageModalVisibility,
}) => {
  const { windowWidth } = useGetWindowWidth();

  const { imageNumber, returnSpecificImage, setImageNumber } = useSwitchImage();

  return (
    <>
      <div className={styles.image_container}>
        {windowWidth < 1024 ? (
          returnSpecificImage(imageNumber)
        ) : (
          <button
            aria-label="Image"
            onClick={() => setImageModalVisibility(!imageModalIsVisible)}
          >
            {returnSpecificImage(imageNumber)}
          </button>
        )}
        <button
          aria-label="Previous"
          className={styles.image_previous__button}
          onClick={() =>
            setImageNumber(Math.max(1, Math.min(4, imageNumber - 1)))
          }
        >
          <PreviousIcon fontSize={13} />
        </button>

        <button
          aria-label="Next"
          className={styles.image_next__button}
          onClick={() =>
            setImageNumber(Math.max(1, Math.min(4, imageNumber + 1)))
          }
        >
          <NextIcon fontSize={13} />
        </button>
      </div>

      <div className={styles.image_thumbnail_container}>
        <button
          aria-label="Image thumbnail 1"
          className={
            imageNumber === 1
              ? styles.image_thumbnail_button_selected
              : styles.image_thumbnail_button
          }
          onClick={() => setImageNumber(1)}
        >
          <Image
            src="/image-product-1-thumbnail.jpg"
            alt="Product thumbnail"
            width={90}
            height={90}
          />
        </button>
        <button
          aria-label="Image thumbnail 2"
          className={
            imageNumber === 2
              ? styles.image_thumbnail_button_selected
              : styles.image_thumbnail_button
          }
          onClick={() => setImageNumber(2)}
        >
          <Image
            src="/image-product-2-thumbnail.jpg"
            alt="Product thumbnail"
            width={90}
            height={90}
          />
        </button>
        <button
          aria-label="Image thumbnail 3"
          className={
            imageNumber === 3
              ? styles.image_thumbnail_button_selected
              : styles.image_thumbnail_button
          }
          onClick={() => setImageNumber(3)}
        >
          <Image
            src="/image-product-3-thumbnail.jpg"
            alt="Product thumbnail"
            width={90}
            height={90}
          />
        </button>
        <button
          aria-label="Image thumbnail 4"
          className={
            imageNumber === 4
              ? styles.image_thumbnail_button_selected
              : styles.image_thumbnail_button
          }
          onClick={() => setImageNumber(4)}
        >
          <Image
            src="/image-product-4-thumbnail.jpg"
            alt="Product thumbnail"
            width={90}
            height={90}
          />
        </button>
      </div>
    </>
  );
};

export default ProductImage;
