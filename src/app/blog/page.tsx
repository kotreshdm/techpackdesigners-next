"use client";
import DispalyBlog from "@/components/blog/DisplayBlog";
import { loadPosts } from "@/redux/posts/postSlice";
import Constants from "@/utils/Constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Post {
  // Define the properties of a post
  postSlug: string;
  bannerImage?: string;
  postName: string;
  SEODescription: string;
}

interface RootState {
  posts: {
    posts: Post[];
    postsCurrentPage: number;
    pageSize: number;
  };
}

const Blog: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { posts, postsCurrentPage, pageSize } = useSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useDispatch();
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts();
    }
  }, []);
  useEffect(() => {
    updateDisplayPosts();
  }, [posts, postsCurrentPage, pageSize]);
  const updateDisplayPosts = () => {
    const totalItems = posts.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (postsCurrentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    const filteredPosts = posts.slice(startIndex, endIndex);
    setDisplayPosts(filteredPosts);
  };

  async function getPosts() {
    setLoading(true);
    console.error("Error fetching posts:");

    try {
      const response = await axios.get(Constants.apiRoutes.getAllPosts);
      dispatch(loadPosts(response.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading ? <div>Loading...</div> : <DispalyBlog posts={displayPosts} />}
    </div>
  );
};

export default Blog;
