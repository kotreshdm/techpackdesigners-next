import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: {},
  postsCurrentPage: 1,
  pageSize: 8,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    loadingPost: (state) => {
      state.loading = true;
      state.error = null;
      state.post = {};
    },
    reset: () => initialState, // Reset state to initial state
    resetBlogDisplay: (state) => {
      state.error = null;
      state.post = {};
    },
    getPostBySlug: (state, action) => {
      const filteredPost = state.posts.find(
        (item: any) => item.postSlug === action.payload
      );
      if (filteredPost) {
        state.post = filteredPost;
      } else {
        state.post = {};
      }
      state.loading = false;
    },
  },
});

export const {
  loadPosts,
  reset,
  getPostBySlug,
  loadingPost,
  resetBlogDisplay,
} = postSlice.actions;

export default postSlice.reducer;
