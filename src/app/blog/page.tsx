"use client";
import DisplayBlog from "@/components/blog/DisplayBlog";
import { updatePostsCurrentPage } from "@/redux/posts/postSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "flowbite-react";
import CategoriesBanner from "@/components/blog/CategoriesBanner";
import LoadingComp from "@/components/LoadingComp";

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
  };
}

const Blog: React.FC = () => {
  const { loading, posts, postsCurrentPage, pageSize } = useSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useDispatch();
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);

  useEffect(() => {
    updateDisplayPosts();
  }, [posts, postsCurrentPage, pageSize]);
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const updateDisplayPosts = () => {
    const startIndex = (postsCurrentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const filteredPosts = posts.slice(startIndex, endIndex);
    setDisplayPosts(filteredPosts);
  };
  return (
    <div>
      <CategoriesBanner />
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <DisplayBlog posts={displayPosts} />
          <div className='flex overflow-x-auto sm:justify-center py-6'>
            <Pagination
              layout='pagination'
              currentPage={postsCurrentPage}
              totalPages={totalPages}
              onPageChange={(e) => dispatch(updatePostsCurrentPage(e))}
              previousLabel='Go back'
              nextLabel='Go forward'
              showIcons
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
