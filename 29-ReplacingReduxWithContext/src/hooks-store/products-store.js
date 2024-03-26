import { PRODUCTS } from '../dummy-products';
import { initStore } from './store';

// this file is essentially the same as React's Create context, we create our contextValue and pass them to the initialStore,
// which will handle a globalState and as such can take in multiple configurations such as these.
// Where as Context is used to share logic between components, this globalStore will share data as well as logic

const configureStore = () => {
  const actions = {
    faveItem: (currentState, productId) => {
      // prettier-ignore
      const prodIndex = currentState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];

      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return { products: updatedProducts };
    },
  };

  // same actions & state as the store-context: the 'favourite product handling function' and the initial state dummy data passed as contextValue
  initStore(actions, { products: PRODUCTS }); // pass the actions and initial state as arguments to initialStore
};

export default configureStore;
