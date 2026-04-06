import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    const data = await AsyncStorage.getItem("@cart");
    if (data) setCart(JSON.parse(data));
  }

  async function saveCart(newCart) {
    setCart(newCart);
    await AsyncStorage.setItem("@cart", JSON.stringify(newCart));
  }

  function addToCart(product, quantidade) {
    const existe = cart.find((item) => item.id === product.id);

    let newCart;

    if (existe) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantidade: item.quantidade + quantidade }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantidade }];
    }

    saveCart(newCart);
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  }

  function clearCart() {
    saveCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}