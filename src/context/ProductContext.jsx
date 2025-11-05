import React, { createContext, useContext, useState, useEffect } from "react";
import productsData from "../data/products"; // Main product list
import newArrivalsData from "../data/newarrivals"; // New arrivals list

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API loading delay (optional)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(productsData);
        setNewArrivals(newArrivalsData);
        setLoading(false);
      }, 500);
    };

    loadData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, newArrivals, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
