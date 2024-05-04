"use client";
import React, { useEffect } from "react";
import CategoriesBanner from "./CategoriesBanner";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories, loadPosts } from "@/redux/posts/postSlice";
import ListOfBlogs from "./ListOfBlogs";

interface Category {
  name: string;
  slug: string;
}
interface RootState {
  posts: {
    categories: Category[];
    posts: any[];
    categoriesCurrentPage: number;
    pageSize: number;
    loading: boolean;
    postFetchTime: any;
    refreshTime: number;
  };
}

const AllBlogs = ({ fetcehdPosts, fetcehdCategories }: any) => {
  const { categories, posts, postFetchTime, refreshTime } = useSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(loadCategories(fetcehdCategories) as any);
    }
    if (posts.length === 0) {
      dispatch(loadPosts(fetcehdPosts) as any);
    } else {
      if (postFetchTime) {
        const lastFetchedDate = new Date(postFetchTime);
        const dataTIme = new Date();
        const diff = (dataTIme.getTime() - lastFetchedDate.getTime()) / 1000;
        if (diff > refreshTime) {
          dispatch(loadPosts(fetcehdPosts) as any);
        }
      }
    }
  }, []);
  return (
    <div>
      <CategoriesBanner />
      <ListOfBlogs />
    </div>
  );
};

export default AllBlogs;
