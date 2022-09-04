import type { NextPage } from "next";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import CloseIcon from "@/assets/images/icon-close.svg";

import styles from "./styles.module.css";
import { useGetWindowWidth } from "@/hooks/useGetWindowWidth";

interface NavigationBarProps {
  menuIsVisible: boolean;
  setMenuVisibility: Dispatch<SetStateAction<boolean>>;
}

const NavigationBar: NextPage<NavigationBarProps> = ({
  menuIsVisible,
  setMenuVisibility,
}) => {
  const { windowWidth } = useGetWindowWidth();

  return (
    <nav
      className={
        menuIsVisible || windowWidth > 1023
          ? styles.navigation
          : styles.navigation_hidden
      }
    >
      <div className={styles.navigation_container}>
        <button onClick={() => setMenuVisibility(!menuIsVisible)}>
          <CloseIcon />
        </button>
        <ul>
          <li>
            <Link href="/">
              <a aria-label="Collections">Collections</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a aria-label="Men">Men</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a aria-label="Women">Women</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a aria-label="About">About</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a aria-label="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
