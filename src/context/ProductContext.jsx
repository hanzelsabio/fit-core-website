import React, { createContext, useContext, useState, useEffect } from "react";
import productsData from "../data/products"; // ⬅️ import your local data

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API loading delay (optional)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(productsData);
        setLoading(false);
      }, 500);
    };

    loadData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
