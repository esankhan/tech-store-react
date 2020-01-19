import React, { useReducer, useEffect } from "react";
import { linkData } from "../linkData";
import { socialData } from "../socialData";
import { items } from "../productData";
import techStoreReducer from "./techStoreReducer";
import TechStoreContext from "./techStoreContext";
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

const TechStoreState = props => {
  const initialState = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialData: socialData,
    cart: [],
    cartItems: 0,
    cartsSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: true
  };

  useEffect(() => {
    setProducts(items);
    // eslint-disable-next-line
  }, []);

  const setProducts = items => {
    let products = items.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    dispatch({ type: SET_PRODUCTS, payload: products });
    getStorageCart();
    getStorageProducts();
    getTotal();
  };

  const handleSideCart = () => {
    dispatch({ type: HANDLE_SIDE_CART });
  };

  const handleSidebar = () => {
    dispatch({ type: HANDLE_SIDE_BAR });
  };

  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  const openCart = () => {
    dispatch({ type: OPEN_CART });
  };

  const getStorageCart = () => {
    dispatch({ type: GET_SYNC_STORAGE });
  };

  const getStorageProducts = () => {
    dispatch({ type: GET_STORAGE_PRODUCT });
  };

  const getTotal = () => {
    dispatch({ type: GET_TOTAL });
  };

  const syncStorage = () => {
    dispatch({ type: SYNC_STORAGE });
  };

  const addToCart = id => {
    dispatch({ type: ADD_TO_CART, payload: id });
    getTotal();
    openCart();
    syncStorage();
  };

  const setSingleProducts = id => {
    dispatch({ type: SET_SINGLE_PRODUCT, payload: id });
  };

  //cart Functionality

  //increment
  const increment = id => {
    dispatch({ type: INCREMENT, payload: id });
    getTotal();
    syncStorage();
  };
  //decrement
  const decrement = id => {
    dispatch({ type: DECREMENT, payload: id });
    getTotal();
    syncStorage();
  };

  //clear cart

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    getTotal();
    syncStorage();
  };

  const handleChange = event => {
    const name = event.target.name;

    const value =
      event.target.type === "checked"
        ? event.target.checked
        : event.target.value;

    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    sortData();
  };

  //Sort data

  const sortData = () => {
    dispatch({ type: SORT_DATA });
  };

  const [state, dispatch] = useReducer(techStoreReducer, initialState);

  return (
    <TechStoreContext.Provider
      value={{
        sidebarOpen: state.sidebarOpen,
        cartOpen: state.cartOpen,
        links: state.links,
        cart: state.cart,
        socialData: state.socialData,
        cartItems: state.cartItems,
        cartsSubTotal: state.cartsSubTotal,
        cartTax: state.cartTax,
        cartTotal: state.cartTotal,
        storeProducts: state.storeProducts,
        filteredProducts: state.filteredProducts,
        featuredProducts: state.featuredProducts,
        singleProduct: state.singleProduct,
        loading: state.loading,
        search: state.search,
        price: state.price,
        min: state.min,
        max: state.max,
        company: state.company,
        shipping: state.shipping,
        handleSideCart,
        handleSidebar,
        openCart,
        closeCart,
        addToCart,
        getStorageCart,
        getStorageProducts,
        getTotal,
        syncStorage,
        setSingleProducts,
        setProducts,
        increment,
        decrement,
        clearCart,
        handleChange,
        sortData
      }}
    >
      {props.children}
    </TechStoreContext.Provider>
  );
};

export default TechStoreState;
