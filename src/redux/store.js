import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./Slices/addToCartSlice"
import productsReducer from "./Slices/productsSlice"
import filteredProductsReducer from "./Slices/filterItems"
import searchedProductsReducer from "./Slices/searchSlice"
import homeFilteredProductsReducer from "./Slices/filterHomeItems"
import featureSlice from "./Slices/featureSlice";

export  const store=configureStore({
reducer: {
    cart:addToCartReducer,
    products:productsReducer,
    filteredItems:filteredProductsReducer,
    searchFilter:searchedProductsReducer,
    homeFilteredItems:homeFilteredProductsReducer,
    featured:featureSlice
}



})