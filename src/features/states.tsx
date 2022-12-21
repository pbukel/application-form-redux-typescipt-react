import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface MyState {
  value: boolean;
  index: number;
  user: object;
  firstFormErrors: string[];
  secondFormErrors: string[];
  values: {
    companyCode: string;
    companyName: string;
    name: string;
    surname: string;
    jobTitle: string;
    email: string;
    phone: Number;
    agree1: boolean;
    agree2: boolean;
  };
}
const initialState: MyState = {
  value: false,
  index: 0,
  user: {},
  values: {
    companyCode: "",
    companyName: "",
    name: "",
    surname: "",
    jobTitle: "",
    email: "",
    phone: 0,
    agree1: false,
    agree2: false,
  },
  firstFormErrors: [],
  secondFormErrors: [],
};

export const stateSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setIndex: (state, { payload }) => {
      state.index = payload;
    },
    setFromButtons: (state, { payload }) => {
      if (payload === "next") state.index += 1;
      if (payload === "back") state.index -= 1;
    },
    setShowLegal: (state, { payload }) => {
      state.value = payload;
    },
    setValues: (state, { payload }) => {
      state.values = { ...state.values, [payload.name]: payload.value };
    },
    setError1: (state, { payload }) => {
      if (!state.firstFormErrors.includes(payload)) {
        state.firstFormErrors.push(payload);
      }
    },
    removeError1: (state, { payload }) => {
      if (state.firstFormErrors.includes(payload)) {
        state.firstFormErrors.splice(state.firstFormErrors.indexOf(payload), 1);
      }
    },
    setError2: (state, { payload }) => {
      if (!state.secondFormErrors.includes(payload)) {
        state.secondFormErrors.push(payload);
      }
    },
    removeError2: (state, { payload }) => {
      if (state.secondFormErrors.includes(payload)) {
        state.secondFormErrors.splice(
          state.secondFormErrors.indexOf(payload),
          1
        );
      }
    },
  },
});

export const {
  setIndex,
  setFromButtons,
  setShowLegal,
  setValues,
  setError1,
  removeError1,
  setError2,
  removeError2,
} = stateSlice.actions;
export const selectCount = (state: RootState) => state.states.value;
export default stateSlice.reducer;
