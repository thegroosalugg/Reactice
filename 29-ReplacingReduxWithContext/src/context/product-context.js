import { createContext, useState } from 'react';
import { PRODUCTS } from './dummy-products';

export const ProductContext = createContext({
  products: [],
  faveItem: () => {},
});

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(PRODUCTS);

  const faveItem = (productId) => {
    setProductList((prevList) => {
      const prodIndex = prevList.findIndex((p) => p.id === productId);
      const newFavStatus = !prevList[prodIndex].isFavorite;
      const updatedProducts = [...prevList];

      updatedProducts[prodIndex] = {
        ...prevList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductContext.Provider value={{ products: productList, faveItem }}>
      {children}
    </ProductContext.Provider>
  );
};
