// src/hooks/useCart.ts
import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState<CartProps[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (product: CartProps) => {
    // const ProductInCart = cart?.find(
    //     (item: CartProps) => item?.id === product.id
    //   );
    // setCart((prevCart) => [...prevCart, product]);
    setCart((prev: any) => {
      const ProductInCart = cart?.find(
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
  };

  const removeItemFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return { cart, addItemToCart, removeItemFromCart };
};

export default useCart;
