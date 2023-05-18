"use client";

import React, { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
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
  const toast = useToast();
  const [cartItems, setCartItems] = useState<Deal[]>([]);

  // Función para agregar un deal al carrito, con un máximo de 5 deals, y sin permitir duplicados.
  const addToCart = (deal: Deal) => {
    if (cartItems.find((item) => item.dealID === deal.dealID)) {
      return toast({
        title: "Deal already in cart!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    if (cartItems.length >= 5)
      return toast({
        title: "Cart is full!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

    setCartItems((prevItems) => {
      toast({
        title: "Deal added to cart!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return [...prevItems, deal];
    });
  };

  // Función para remover un deal del carrito.
  const removeFromCart = (deal: Deal) => {
    setCartItems((prevItems) => {
      toast({
        title: "Deal removed from cart!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return prevItems.filter((item) => item.dealID !== deal.dealID);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
