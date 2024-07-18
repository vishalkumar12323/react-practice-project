import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const actresSlice = createSlice({
  name: "actres",
  initialState: {
    actres: [
      {
        name: "",
        age: "",
        email: "",
        gender: "",
        marriedStatus: false,
        description: "",
      },
    ],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {},
});
