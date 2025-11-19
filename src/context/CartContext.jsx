import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.productId === product.id &&
          item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.cartItemId === existingItem.cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // NEW: create stable cartItemId
      return [
        ...prevCart,
        {
          cartItemId: crypto.randomUUID(),
          productId: product.id,
          ...product,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (id, selectedSize) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === id && item.selectedSize === selectedSize)
      )
    );
  };

  const decreaseQuantity = (id, selectedSize) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateSize = (id, oldSize, newSize) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === id && item.selectedSize === oldSize
      );

      if (!existingItem) return prevCart;

      const updatedCart = prevCart.filter(
        (item) => !(item.id === id && item.selectedSize === oldSize)
      );

      // Check if same product + new size already exists
      const mergedTarget = updatedCart.find(
        (item) => item.id === id && item.selectedSize === newSize
      );

      if (mergedTarget) {
        // Merge quantities instead of creating duplicate
        return updatedCart.map((item) =>
          item.id === id && item.selectedSize === newSize
            ? { ...item, quantity: item.quantity + existingItem.quantity }
            : item
        );
      }

      // Add as new size
      return [
        ...updatedCart,
        {
          ...existingItem,
          selectedSize: newSize,
        },
      ];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        updateSize,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
