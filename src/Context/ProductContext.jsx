import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProductContext deve ser usado dentro de um ProductProvider');
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const local = window.localStorage.getItem('produtos')
    if(local) {
      return JSON.parse(local)
    } else {
      return []
    }});

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(products));
  }, [products]);


  const addProduct = (newProduct) => setProducts([...products, newProduct]);
  const sortedProducts = () => [...products].sort((a, b) => a.value - b.value);

  return (
    <ProductContext.Provider value={{ products, addProduct, sortedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
