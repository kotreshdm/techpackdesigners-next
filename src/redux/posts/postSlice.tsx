"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [] };
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { loadPosts } = postSlice.actions;

export default postSlice.reducer;
