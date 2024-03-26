import { createContext, useState } from 'react';
import { PRODUCTS } from './dummy-products';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState({ products: PRODUCTS });

  return (
    <ProductContext.Provider value={productList}>
      {children}
    </ProductContext.Provider>
  );
};
