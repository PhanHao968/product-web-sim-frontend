import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import SimReducer from "./Reducers/ProductSims/SimReducer";


const store = configureStore({
  reducer: {
    sims: SimReducer,
  },
  middleware: [thunk]
});

export default store;