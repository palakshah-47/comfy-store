import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/slices/theme/themeSlice";
import cartReducer from "@/slices/cart/cartSlice";
import userReducer from "@/slices/user/userSlice";

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    cartState: cartReducer,
    userState: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
