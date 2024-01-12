import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext deve ser usado dentro de um ProductProvider');
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => setProducts([...products, newProduct]);
  const sortedProducts = () => [...products].sort((a, b) => a.value - b.value);

  return (
    <ProductContext.Provider value={{ products, addProduct, sortedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
