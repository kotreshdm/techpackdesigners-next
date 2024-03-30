import Constants from "@/utils/Constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface PostState {
  posts: any[];
  categories: any[];
  post: any;
  postsCurrentPage: number;
  categoriesCurrentPage: number;
  pageSize: number;
  loading: boolean;
  error: string;
}

const initialState: PostState = {
  posts: [],
  categories: [],
  post: {},
  postsCurrentPage: 1,
  categoriesCurrentPage: 1,
  pageSize: 8,
  loading: false,
  error: "",
};

// Generates async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(Constants.apiRoutes.getAllPosts);
  return response.data;
});

// Generates async thunk for fetching posts
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(Constants.apiRoutes.getAllCategories);
    return response.data;
  }
);

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
      state.error = "";
      state.post = {};
    },
    reset: () => initialState,
    updatePostsCurrentPage: (state, action) => {
      state.postsCurrentPage = action.payload;
    },
    resetBlogDisplay: (state) => {
      state.error = "";
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
        state.postsCurrentPage = 1;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = "";
        state.categoriesCurrentPage = 1;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const {
  loadPosts,
  reset,
  updatePostsCurrentPage,
  getPostBySlug,
  loadingPost,
  resetBlogDisplay,
} = postSlice.actions;

export default postSlice.reducer;
