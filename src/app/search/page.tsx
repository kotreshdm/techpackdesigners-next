"use client";
import LoadingComp from "@/components/LoadingComp";
import CategoriesBanner from "@/components/blog/CategoriesBanner";
import DispalyBlog from "@/components/blog/DisplayBlog";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Post {
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
    loading: boolean;
    postFetchTime: any;
    refreshTime: number;
    searchPosts: string;
  };
}

export default function SearchPage() {
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);
  const { loading, searchPosts, posts } = useSelector(
    (state: RootState) => state.posts
  );
  useEffect(() => {
    updateSearchPosts();
  }, [posts, searchPosts]);

  const updateSearchPosts = () => {
    let searchKey = searchPosts.toLowerCase();
    console.log(searchKey);

    const filteredPosts = posts.filter(
      (item) =>
        item.postName.toLowerCase().includes(searchKey) ||
        (item.SEODescription &&
          item.SEODescription.toLowerCase().includes(searchKey))
    );

    setDisplayPosts(filteredPosts);
  };

  return (
    <div>
      <CategoriesBanner />
      <DispalyBlog posts={displayPosts} />
      {loading && <LoadingComp />}
    </div>
  );
}
