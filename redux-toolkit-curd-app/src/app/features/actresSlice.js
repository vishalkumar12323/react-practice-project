import { createSlice } from "@reduxjs/toolkit";
import { fetchPost, postData } from "../services/functions";

export const actresSlice = createSlice({
  name: "post",
  initialState: {
    post: [
      {
        title: "",
        body: "",
        userId: "",
      },
    ],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(postData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postData.fulfilled, (state, action) => {
      state.loading = false;
      state.post.push(action.payload);
    });
    builder.addCase(postData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post.push(action.payload);
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
