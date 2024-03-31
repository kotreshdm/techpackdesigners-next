"use client";
import LoadingComp from "@/components/LoadingComp";
import CategoriesBanner from "@/components/blog/CategoriesBanner";
import React from "react";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const { searchPosts } = useSelector((state: any) => state.posts);

  return (
    <div>
      <CategoriesBanner />
      {searchPosts}
      <LoadingComp />
    </div>
  );
}
