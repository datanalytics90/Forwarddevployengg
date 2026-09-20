import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  status: string;
}

const initialState: AppState = {
  status: "Redux is working",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = appSlice.actions;

export default appSlice.reducer;