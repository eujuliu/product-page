import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import NavigationBar from "@/components/NavigationBar";
import CartModal from "@/components/CartModal";
import ProductImage from "@/components/ProductImage";
import ImageModal from "@/components/ImageModal";

import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/assets/images/icon-menu.svg";
import CartIcon from "@/assets/images/icon-cart.svg";
import MinusIcon from "@/assets/images/icon-minus.svg";
import PlusIcon from "@/assets/images/icon-plus.svg";

import styles from "@/styles/pages/Home.module.css";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const [cartProducts, setCartProducts] = useState<
    { id: number; img: string; name: string; price: number; quantity: number }[]
  >([]);

  const [cartModalIsVisible, setCartVisibility] = useState<boolean>(false);
  const [menuIsVisible, setMenuVisibility] = useState<boolean>(false);
  const [imageModalIsVisible, setImageModalVisibility] =
    useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="E-commerce product page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header_div}>
          <button
            aria-label="Menu"
            className={styles.menu_button}
            onClick={() => {
              cartModalIsVisible ? setCartVisibility(false) : null;

              setMenuVisibility(!menuIsVisible);
            }}
          >
            <MenuIcon />
          </button>

          <Logo
            fontSize={138}
            height={20}
            fill="#69707D"
            className={styles.logo}
          />
          <NavigationBar
            menuIsVisible={menuIsVisible}
            setMenuVisibility={setMenuVisibility}
          />
        </div>
        <div className={styles.header_div}>
          <button
            aria-label="Cart"
            className={styles.cart_button}
            onClick={() => setCartVisibility(!cartModalIsVisible)}
          >
            <CartIcon fontSize={22} />
            {cartProducts.length > 0 ? (
              <span className={styles.cart_items_quantity}>
                {cartProducts.map(({ quantity }) => {
                  let result = 0;
                  result += quantity;

                  return result;
                })}
              </span>
            ) : null}
          </button>

          <CartModal
            cartModalIsVisible={cartModalIsVisible}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
          <div className={styles.avatar_container}>
            <Image
              src="/image-avatar.png"
              alt="Avatar image"
              width={25}
              height={25}
              layout="responsive"
            />
          </div>
        </div>
      </header>

      <ImageModal
        imageModalIsVisible={imageModalIsVisible}
        setImageModalVisibility={setImageModalVisibility}
      />
      <main className={styles.main}>
        <div className={styles.main_section}>
          <ProductImage
            imageModalIsVisible={imageModalIsVisible}
            setImageModalVisibility={setImageModalVisibility}
          />
        </div>
        <div className={styles.main_section}>
          <p className={styles.section_sneaker_company}>SNEAKER COMPANY</p>
          <h1 className={styles.section_heading}>
            Fall Limited Edition Sneakers
          </h1>
          <p className={styles.section_description}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className={styles.section_pricing}>
            <span>
              <p className={styles.pricing_price}>$125.00</p>
              <p className={styles.pricing_discount}>50%</p>
            </span>
            <p className={styles.pricing_old_price}>$250.00</p>
          </div>
          <div className={styles.quantity_container}>
            <div className={styles.quantity_input__container}>
              <button
                aria-label="Minus"
                onClick={() =>
                  setInputValue(Math.max(1, Math.min(100, inputValue - 1)))
                }
              >
                <MinusIcon fontSize={12} />
              </button>
              <input
                type="number"
                min={0}
                max={100}
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
              />
              <button
                aria-label="Plus"
                onClick={() =>
                  setInputValue(Math.max(1, Math.min(100, inputValue + 1)))
                }
              >
                <PlusIcon fontSize={12} />
              </button>
            </div>
            <button
              aria-label="Add to cart"
              className={styles.buy_button}
              onClick={() => {
                if (cartProducts.length === 0) {
                  setCartProducts([
                    ...cartProducts,
                    {
                      id: 1,
                      img: "/image-product-1-thumbnail.jpg",
                      name: "Fall Limited Edition Sneakers",
                      price: 125.0,
                      quantity: inputValue,
                    },
                  ]);
                } else {
                  setCartProducts(
                    cartProducts.map((obj) => {
                      if (obj.id === 1) {
                        return { ...obj, quantity: obj.quantity + inputValue };
                      }

                      return obj;
                    })
                  );
                }
              }}
            >
              <CartIcon fontSize={18} />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
