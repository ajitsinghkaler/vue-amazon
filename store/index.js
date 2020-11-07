export const state = () => ({
  cart: [],
  cartLength: 0
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find(prod => prod.id === product.id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", product);
    }

    commit("incrementCartLength");
  }
};

export const mutations = {
  pushProductToCart(state, product) {
    product.quantity = 1;
    state.cart.push(product);
  },

  incrementProductQty(state, product) {
    product.quantity++;
    const productIndex = state.cart.indexOf(product);
    state.cart.splice(productIndex, 1, product);
  }
};
