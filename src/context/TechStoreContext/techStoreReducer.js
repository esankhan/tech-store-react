import {
  OPEN_CART,
  HANDLE_SIDE_BAR,
  CLOSE_CART,
  HANDLE_SIDE_CART,
  SET_PRODUCTS,
  ADD_TO_CART,
  GET_TOTAL,
  SYNC_STORAGE,
  GET_SYNC_STORAGE,
  SET_SINGLE_PRODUCT,
  GET_STORAGE_PRODUCT,
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  HANDLE_CHANGE,
  SORT_DATA
} from "../Type";

export default (state, action) => {
  switch (action.type) {
    case HANDLE_SIDE_BAR: {
      // console.log("why!!!!!!!!!!!");
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
        // cartOpen: !state.cartOpen
      };
    }

    case HANDLE_SIDE_CART: {
      console.log("Handle Cart Running");
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
    }
    case OPEN_CART: {
      return {
        ...state,
        cartOpen: true
      };
    }
    case CLOSE_CART: {
      return {
        ...state,
        cartOpen: false
      };
    }

    case SET_PRODUCTS: {
      let tempMax = Math.max(...action.payload.map(item => item.price));

      return {
        ...state,
        featuredProducts: action.payload.filter(item => item.featured === true),
        storeProducts: action.payload,
        filteredProducts: action.payload,
        loading: false,
        max: tempMax,
        price: tempMax
      };
    }

    case ADD_TO_CART: {
      //console.log(state);

      let tempCart = state.cart;
      let tempProducts = state.storeProducts;
      let tempItem = tempCart.find(item => item.id === action.payload);
      if (!tempItem) {
        tempItem = tempProducts.find(item => item.id === action.payload);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }
      // console.log(tempCart);

      return {
        ...state,
        cart: tempCart
      };
    }

    case GET_TOTAL: {
      let subTotal = 0;
      let cartItems = 0;
      state.cart.forEach(item => {
        subTotal += item.total;
        cartItems += item.count;
      });
      subTotal = parseFloat(subTotal.toFixed(2));
      let tax = subTotal * 0.18;
      tax = parseFloat(tax.toFixed(2));
      let total = subTotal + tax;
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        cartItems,
        cartsSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    }

    case SYNC_STORAGE: {
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return {
        ...state
      };
    }

    case GET_SYNC_STORAGE: {
      let cart = [];
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      return {
        ...state,
        cart
      };
    }

    case SET_SINGLE_PRODUCT: {
      let product = state.storeProducts.find(
        item => item.id === action.payload
      );
      localStorage.setItem("singleProduct", JSON.stringify(product));
      return {
        ...state,
        singleProduct: product,
        loading: false
      };
    }

    case GET_STORAGE_PRODUCT: {
      let singleProduct = {};
      if (localStorage.getItem("singleProduct")) {
        singleProduct = JSON.parse(localStorage.getItem("singleProduct"));
      }

      return {
        ...state,
        singleProduct
      };
    }

    case INCREMENT: {
      let tempCart = [...state.cart];
      const cartItem = tempCart.find(item => item.id === action.payload);
      cartItem.count++;
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      console.log(cartItem);
      return {
        ...state,
        cart: tempCart
      };
    }
    case DECREMENT: {
      let tempCart = [...state.cart];
      const cartItem = tempCart.find(item => item.id === action.payload);
      if (cartItem.count > 1) {
        cartItem.count--;
      } else {
        tempCart = tempCart.filter(item => item.id !== action.payload);
      }
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      return {
        ...state,
        cart: tempCart
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: []
      };
    }

    case HANDLE_CHANGE: {
      let { name, value } = action.payload;
      if (value === "on") {
        value = !state.shipping;
      }
      if (name === "price") {
        value = parseInt(value);
      }

      return {
        ...state,
        [name]: value
      };
    }

    case SORT_DATA: {
      let tempProducts = [...state.storeProducts];

      if (state.company !== "all") {
        tempProducts = tempProducts.filter(
          item => item.company === state.company
        );
      }

      //Filterinf based on price
      tempProducts = tempProducts.filter(
        item =>
          item.price <= state.price && item.freeShipping === state.shipping
      );

      //Filtering based on title
      if (state.search.length > 0) {
        tempProducts = tempProducts.filter(item => {
          let tempSearch = state.search.toLowerCase();
          let tempTitle = item.title.slice(0, state.search.length);
          if (tempSearch === tempTitle) {
            return item;
          }
        });
      }

      return {
        ...state,
        filteredProducts: tempProducts
      };
    }

    default: {
      return {
        state
      };
    }
  }
};
