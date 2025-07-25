import { configureStore } from "@reduxjs/toolkit";
import  CardSlice  from "./CardSlice";

const store=configureStore({
    reducer:{
        card:CardSlice
    }
   
})
export default store