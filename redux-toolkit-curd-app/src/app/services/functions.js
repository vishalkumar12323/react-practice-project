import { createAsyncThunk } from "@reduxjs/toolkit";

export const postData = createAsyncThunk(
  "post/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await response.json();
  return await post;
});
