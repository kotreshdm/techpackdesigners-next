"use client";
import DispalyBlog from "@/components/blog/DisplayBlog";
import { loadPosts } from "@/redux/posts/postSlice";
import Constants from "@/utils/Constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const { posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  }, []);
  async function getPosts() {
    setLoading(true);
    try {
      const response = await axios(Constants.apiRoutes.getAllPosts);
      dispatch(loadPosts(response.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>{loading ? <div>Loading...</div> : <DispalyBlog posts={posts} />}</div>
  );
};

export default Blog;
