'use client'

import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Deal } from "../../types/types";

interface CartContextType {
  cartItems: Deal[];
  addToCart: (deal: Deal) => void;
  removeFromCart: (deal: Deal) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Deal[]>([]);

  const addToCart = (deal: Deal) => {
    if(cartItems.find((item) => item.dealID === deal.dealID)) {
      toast.error("Deal already in cart!");
      return;
    }

    if (cartItems.length >= 5) return toast.error("Cart is full!");

    setCartItems((prevItems) => {
     toast.success("Deal added to cart!");
     return [...prevItems, deal]
    });
  };

  const removeFromCart = (deal: Deal) => {
    setCartItems((prevItems) => {
      toast.success("Deal removed from cart!");
      return prevItems.filter((item) => item.dealID !== deal.dealID);
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
