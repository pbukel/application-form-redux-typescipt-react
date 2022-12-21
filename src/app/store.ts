import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import stateReducer from "../features/states";

export const store = configureStore({
  reducer: {
    states: stateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
