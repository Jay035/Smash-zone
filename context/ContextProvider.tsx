"use client";

import { Products } from "@/components/data";
import { ReactNode, createContext, useContext, useState } from "react";

export const ShopContext = createContext<ShopProps>({
  cartItems: [],
});

type ShopProps = {
  cartItems: any;
  addToCart?: (x: CartProps) => void;
  removeFromCart?: (x: CartProps) => void;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
  sliceValue?: number;
  setSliceValue?: (page: number) => void;
};

type Props = {
  children: ReactNode;
};

const getDefaultCart = () => {
  // const cartItems = localStorage.getItem("cartItems");
  let cart: any = {};
  for (let i = 1; i < Products.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = ({ children }: Props) => {
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [sliceValue, setSliceValue] = useState(1);

  // CART
  const [cartItems, setCartItems] = useState([]);

  const getTotalItemsInCart = (items: CartProps[]) =>
    items?.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: CartProps) => {
    console.log(product);
    setCartItems((prev: any) => {
      const ProductInCart = cartItems?.find(
        (item: CartProps) => item?.id === product.id
      );
      // is the product already in the cart
      if (ProductInCart) {
        return prev?.map((item: CartProps) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add to cart
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    console.log(cartItems);
  };

  const removeFromCart = (item: CartProps) => {
    setCartItems((prev: any) => ({ ...prev, [item.id]: prev[item.id] - 1 }));
    console.log(cartItems, item.id);
  };

  const value = {
    cartItems,
    currentPage,
    setCurrentPage,
    sliceValue,
    setSliceValue,
    addToCart,
    removeFromCart,
    getTotalItemsInCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
