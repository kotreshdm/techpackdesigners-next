import AllBlogs from "@/components/blog/AllBlogs";
import Constants from "@/utils/Constants";
import axios from "axios";
import React from "react";

const getAllCategories = async () => {
  const response = await axios.get(
    Constants.baseUrl + `${Constants.apiRoutes.getAllCategories}`
  );
  return response.data;
};
const getAllPosts = async () => {
  const response = await axios.get(
    Constants.baseUrl + `${Constants.apiRoutes.getAllPosts}`
  );
  return response.data;
};

export default async function Details() {
  const categories: any = await getAllCategories();
  const posts: any = await getAllPosts();
  return (
    <div>
      <AllBlogs fetcehdPosts={posts} fetcehdCategories={categories} />
    </div>
  );
}
