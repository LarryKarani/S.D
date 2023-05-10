import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product,Slug } from "../../data/data";
import axios from "axios";


const initialState: Product[] = [];

export const getProducts = createSlice({
    name: "products",
    initialState,
    reducers: {
        loadProduct: (state, action: PayloadAction<Slug>) => {
            const url =
            "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductsBySlug"; // replace with your URL
      
            const data = {
                slug: action.payload.slug,
              };
            
       
            axios
            .post(url, data)
            .then((response) => {
              console.log("ee",response.data[0]);
              const updatedBob: Product = {
                  ...(response.data[0] as object),
                  id: "",
                  name: "",
                  price: 0,
                  quantity: 0,
                  image: "",
                  description: "",
                  category: "",
                  tags: [],
                  link: "/product-detail/"
              };
              // state.push(updatedBob);
              console.log("ee",state);
              
            })
            .catch((error) => {
              console.error(error);
            });
       
        // const productExists = state.find(p => p.id === action.payload.id);
        // if (!productExists) {
        //   const serializedState = JSON.stringify(state);
        //   localStorage.setItem("state", serializedState);
        // } else{
        //   console.log("poi", action.payload);
        //   const index = state.findIndex(p => p.id === action.payload.id);
        //   const updatedBob = {
        //     ...productExists,
        //     quantity: productExists.quantity + action.payload.quantity
        //     ,
        //   };
        
        //   state[index] = updatedBob;
        //   const serializedState = JSON.stringify(state);
        //   localStorage.setItem("state", serializedState);
        }, 
      removeProduct: (state, action: PayloadAction<Product>) => {
        console.log("action.payload.id",  action.payload.id);
        const knop = state.filter((product) => product.id !== action.payload.id)
        const serializedState = JSON.stringify(knop);
        localStorage.setItem("state", serializedState);
        return state.filter((product) => product.id !== action.payload.id);
      },
      updateProduct: (state, action: PayloadAction<Product>) => {
        const productExists = state.find(p => p.id === action.payload.id);
        if (!productExists) {
          state.push(action.payload);
        } else {
          const index = state.findIndex(p => p.id === action.payload.id);
          state[index] = action.payload;
        }
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
      },
    },
  });

export const { loadProduct,  updateProduct  ,removeProduct} = getProducts.actions;

export const selectProducts = (state: RootState) => state.products;

export default getProducts.reducer;


function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

