"use client";

import { Products } from "@/components/data";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useContext, useState } from "react";

export const ShopContext = createContext<ShopProps>({
  cartItems: [],
});

type ShopProps = {
  cartItems: any;
  updateCartItem?: (id: number, qty: number) => void;
  addToCart?: (x: CartProps) => void;
  decreaseItemQuantity?: (x: CartProps) => void;
  removeFromCart?: (x: any) => void;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
  sliceValue?: number;
  setSliceValue?: (page: number) => void;
  getTotalItemsInCart?: any;
};

type Props = {
  children: ReactNode;
};

export const ShopContextProvider = ({ children }: Props) => {
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [sliceValue, setSliceValue] = useState(1);

  // CART
  const [cartItems, setCartItems] = useLocalStorage<CartProps[]>(
    "shopping-cart",
    []
  );

  const getTotalItemsInCart = (items: CartProps[]) =>
    items?.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product: CartProps) => {
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
  const updateCartItem = (id: number, quantity: number) => {
    setCartItems((prev: any) =>
      prev.map((item: CartProps) =>
        item.id === id ? { ...item, quantity } : console.log("item not found")
      )
    );
    console.log(cartItems, quantity);
  };

  const decreaseItemQuantity = ({ id }: CartProps) => {
    setCartItems((prev: any) => {
      // prev.reduce((acc: any, item: CartProps) => {
      //   if (item.id === id) {
      //     if (item.quantity === 1) return acc;
      //     return [...acc, { ...item, quantity: item.quantity - 1 }];
      //   } else {
      //     return [...acc, item];
      //   }
      // }, [] as CartProps[])

      return prev
        .map((cartItem: CartProps) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem: CartProps) => cartItem.quantity > 0);
    });
  };

  const removeFromCart = (id: number) => {
    console.log("remove from cart", id);
    setCartItems((prev) => {
      return prev.filter((item: CartProps) => item.id !== id);
    });
  };

  // const storedCartItems =
  // 		localStorage.getItem("cartItems");
  // 	if (storedCartItems)
  // 		setCartItems(storedCartItems);

  const value = {
    cartItems,
    currentPage,
    setCurrentPage,
    sliceValue,
    setSliceValue,
    addToCart,
    removeFromCart,
    updateCartItem,
    decreaseItemQuantity,
    getTotalItemsInCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
