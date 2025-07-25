import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "CardSlice",
  initialState: {
    count: 0,
    items: [],
    finalTotal: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
      const existingItem = state.items.find(
        (item) => item.idProduct == action.payload.idProduct
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.finalPrice += existingItem.priceProduct;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          finalPrice: action.payload.priceProduct,
        });
      }
      state.finalTotal += action.payload.priceProduct;
    },
    decrement: (state, action) => {
      state.count -= 1;
      state.finalTotal -=action.payload.priceProduct
      const product = state.items.find(
        (item) => item.idProduct == action.payload.idProduct
      );
      if (product) {
        product.quantity -= 1;
        product.finalPrice -= product.priceProduct;
        if (product.quantity == 0) {
          state.items = state.items.filter((item) => item.quantity != 0);
          
        }
      }
    },
    removeItem: (state, action) => {
      const dessert = state.items.find(
        (item) => item.idProduct == action.payload
      );
      if (dessert) {
        state.count -= dessert.quantity;
        state.finalTotal -= dessert.finalPrice;
        dessert.quantity = 0;
      }

      state.items = state.items.filter(
        (element) => element.idProduct != action.payload
      );
    },
  },
});
export const { increment, decrement, removeItem } = CardSlice.actions;
export default CardSlice.reducer;
