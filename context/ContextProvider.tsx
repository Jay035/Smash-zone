"use client";

import { Products } from "@/components/data";
import { ReactNode, createContext, useContext, useState } from "react";

export const ShopContext = createContext<ShopProps>({
  cartItems: [],
});

type ShopProps = {
  cartItems: any;
  addToCart?: (x: number) => void;
  removeFromCart?: (x: number) => void;
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
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState()

  const getTotalItemsInCart = (items: CartProps[]) =>
    items?.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: any) => {
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
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    console.log(cartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItems, itemId);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItemsInCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
