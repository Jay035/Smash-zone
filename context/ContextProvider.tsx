"use client"

import { Products } from "@/components/data";
import { ReactNode, createContext, useContext, useState } from "react";

export const ShopContext = createContext<ShopProps>({
  cartItems: [],
});

type ShopProps = {
  cartItems: any;
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
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems)
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems)
  };



  const value = {
    cartItems,
    addToCart,
    removeFromCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
