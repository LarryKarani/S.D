import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product } from "../../data/data";



const initialState: Product[] = [
];   

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
        console.log("action.payload", action.payload)
        state.push(action.payload);
    },
    // removeProduct: (state, action: PayloadAction<string>) => {
    //   return state.filter((product) => product.id !== action.payload);
    // },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProduct,  updateProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;
