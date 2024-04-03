import Constants from "@/utils/Constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface PostState {
  posts: any[];
  portfilio: any[];
  postFetchTime: any;
  categories: any[];
  post: any;
  postsCurrentPage: number;
  categoriesCurrentPage: number;
  selectedCategory: string;
  pageSize: number;
  loading: boolean;
  error: string;
  refreshTime: number;
  categoriesPageSize: number;
  searchPosts: string;
}

const initialState: PostState = {
  posts: [],
  portfilio: [],
  postFetchTime: null,
  categories: [],
  post: {},
  postsCurrentPage: 1,
  categoriesCurrentPage: 1,
  selectedCategory: "",
  pageSize: 8,
  categoriesPageSize: 8,
  loading: false,
  error: "",
  refreshTime: 1 * 60 * 60,
  searchPosts: "",
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
export const fetchPorifilio = createAsyncThunk(
  "portfilio/fetchPrrifilio",
  async () => {
    const response = await axios.get(Constants.apiRoutes.getAllPortfilio);
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
    updateSearch: (state, action) => {
      state.searchPosts = action.payload;
    },
    updateCategoriesCurrentPage: (state, action) => {
      state.categoriesCurrentPage = action.payload;
    },
    resetCategoriesCurrentPage: (state, action) => {
      state.categoriesCurrentPage = 1;
      state.selectedCategory = action.payload;
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
        state.searchPosts = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = "";
        state.postsCurrentPage = 1;
        state.postFetchTime = new Date();
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
      })
      .addCase(fetchPorifilio.fulfilled, (state, action) => {
        state.portfilio = action.payload;
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
  updateCategoriesCurrentPage,
  resetCategoriesCurrentPage,
  updateSearch,
} = postSlice.actions;

export default postSlice.reducer;
