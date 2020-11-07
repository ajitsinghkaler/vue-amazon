export const state = () => ({
  cart: [],
  cartLength: 0,
  userAddress: {}
});

export const actions = {
  addProductToCart({ state, commit }, product) {
    const cartProduct = state.cart.find(prod => prod.id === product.id);

    if (!cartProduct) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementProductQty", cartProduct);
    }

    commit("incrementCartLength");
  },
  addUserAddress({ state, commit }, address) {
    commit("pushUserAddress", address);
  }
};

export const mutations = {
  pushProductToCart(state, product) {
    product.quantity = 1;
    state.cart.push(product);
  },
  pushUserAddress(state, address) {
    state.userAddress = { ...address };
  },

  incrementProductQty(state, product) {
    product.quantity++;
    const productIndex = state.cart.indexOf(product);
    state.cart.splice(productIndex, 1, product);
  },

  incrementCartLength(state) {
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }
  },
  changeQty(state, { product, qty }) {
    const cartProduct = state.cart.find(prod => prod.id === product.id);
    cartProduct.quantity = qty;
    state.cartLength = 0;
    if (state.cart.length > 0) {
      state.cart.map(product => {
        state.cartLength += product.quantity;
      });
    }

    const productIndex = state.cart.indexOf({ cartProduct });
    state.cart.splice(productIndex, 1, cartProduct);
  },

  removeProduct(state, product) {
    state.cartLength -= product.quantity;
    const productIndex = state.cart.indexOf(product);
    state.cart.splice(productIndex, 1);
  }
};

export const getters = {
  getCartLength(state) {
    return state.cartLength;
  },
  getCart(state) {
    return state.cart;
  },

  getTotalPrice(state) {
    let total = 0;
    state.cart.map(product => {
      total += product.price * product.quantity;
    });
    return total;
  },
  getUserAddress(state) {
    return state.userAddress;
  }
};
