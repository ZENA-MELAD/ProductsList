import { configureStore } from "@reduxjs/toolkit";
import  CardSlice  from "./CardSlice";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../LocalStorageUtils";
const preloadedState={
    card:loadCartFromLocalStorage()
}

const store=configureStore({
    reducer:{
        card:CardSlice
    },
    preloadedState
   
})
store.subscribe(()=>{
    const state=store.getState()
    saveCartToLocalStorage(state.card)
})
export default store