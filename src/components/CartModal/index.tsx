import type { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";

import DeleteIcon from "@/assets/images/icon-delete.svg";

import styles from "./styles.module.css";

interface CartModalProps {
  cartModalIsVisible: boolean;
  cartProducts: {
    id: number;
    img: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  setCartProducts: Dispatch<
    SetStateAction<
      {
        id: number;
        img: string;
        name: string;
        price: number;
        quantity: number;
      }[]
    >
  >;
}

const CartModal: NextPage<CartModalProps> = ({
  cartModalIsVisible,
  cartProducts,
  setCartProducts,
}) => {
  useEffect(() => {
    let filtered = cartProducts.filter((obj) => {
      return obj.quantity > 0;
    });

    setCartProducts(filtered);
  });

  return (
    <div
      className={
        cartModalIsVisible ? styles.cart_modal : styles.cart_modal_hidden
      }
    >
      <p>Cart</p>
      <div className={styles.cart_modal__container}>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartProducts.map(({ id, img, name, price, quantity }) => {
            return (
              <div key={id} className={styles.cart_modal__product}>
                <Image
                  src={img}
                  alt="Product Thumbnail"
                  width={50}
                  height={50}
                />
                <div>
                  <p>{name}</p>
                  <p>
                    ${price} x {quantity} <strong>${price * quantity}</strong>
                  </p>
                </div>
                <button
                  aria-label="Delete"
                  onClick={() => {
                    setCartProducts(() =>
                      cartProducts.map((obj) => {
                        return { ...obj, quantity: obj.quantity - 1 };
                      })
                    );
                  }}
                >
                  <DeleteIcon fontSize={18} />
                </button>
              </div>
            );
          })
        )}

        {cartProducts.length > 0 ? (
          <button
            aria-label="Checkout"
            className={styles.cart_modal__checkout_button}
          >
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CartModal;
