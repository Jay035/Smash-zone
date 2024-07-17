"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const ShopContext = createContext<ShopProps>({
  cartItems: [],
});

type ShopProps = {
  cartItems: any;
  updateCartItem?: (id: string, qty: number) => void;
  addToCart?: (x: CartProps) => void;
  decreaseItemQuantity?: (x: CartProps) => void;
  removeFromCart?: (x: any) => void;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
  sliceValue?: number;
  setSliceValue?: (page: number) => void;
  getTotalItemsInCart?: any;
  loading?: boolean;
  products?: ProductItem[];
  getProduct?: (id: string) => void;
};

type Props = {
  children: ReactNode;
};

export const ShopContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [product, setProduct] = useState<Product>();
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

  const updateCartItem = (id: string, quantity: number) => {
    setCartItems((prev: any) =>
      prev.map((item: CartProps) =>
        item.id === id ? { ...item, quantity } : console.log("item not found")
      )
    );
    console.log(cartItems, quantity);
  };

  const decreaseItemQuantity = ({ id }: CartProps) => {
    // prev.reduce((acc: any, item: CartProps) => {
    //   if (item.id === id) {
    //     if (item.quantity === 1) return acc;
    //     return [...acc, { ...item, quantity: item.quantity - 1 }];
    //   } else {
    //     return [...acc, item];
    //   }
    // }, [] as CartProps[])
    setCartItems((prev: any) => {
      return prev
        .map((cartItem: CartProps) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem: CartProps) => cartItem.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    console.log("remove from cart", id);
    setCartItems((prev) => {
      return prev.filter((item: CartProps) => item.id !== id);
    });
  };

  async function getProducts() {
    setLoading(true);
    await fetch(
      `https://api.timbu.cloud/products?organization_id=${process.env.NEXT_PUBLIC_Organization_ID}&Appid=${process.env.NEXT_PUBLIC_App_ID}&Apikey=${process.env.NEXT_PUBLIC_ApiKey}`
    )
      .then((response) => response.json())
      .then((data: ProductResponse) => {
        setProducts(data.items);
        setLoading(false);
        console.log(data.items);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  async function getProduct(id: string) {
    await fetch(
      `https://api.timbu.cloud/products/${id}?organization_id=${process.env.NEXT_PUBLIC_Organization_ID}&Appid=${process.env.NEXT_PUBLIC_App_ID}&Apikey=${process.env.NEXT_PUBLIC_ApiKey}`
    )
      .then((response) => response.json())
      .then((data: Product) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

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
    loading,
    products,
    getProduct,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
