import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./Slice/HomeSlice";
import TendingNowReducer from "./Slice/TendingNowSlice";


export const store = configureStore({
  reducer: {
    Movie: movieReducer,
    TendingNows:TendingNowReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch