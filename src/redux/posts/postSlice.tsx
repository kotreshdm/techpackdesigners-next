"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [], postsCurrentPage: 1, pageSize: 8 };
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
    reset: () => {
      initialState;
    },
  },
});

export const { loadPosts, reset } = postSlice.actions;

export default postSlice.reducer;
