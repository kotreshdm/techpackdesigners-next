"use client";
import DisplayBlog from "@/components/blog/DisplayBlog";
import {
  fetchPosts,
  resetCategoriesCurrentPage,
  updateCategoriesCurrentPage,
} from "@/redux/posts/postSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "flowbite-react";
import CategoriesBanner from "@/components/blog/CategoriesBanner";

type Props = {
  params: { slug: string };
};

interface Post {
  postSlug: string;
  bannerImage?: string;
  postName: string;
  SEODescription: string;
  categorySlug: string;
}

interface RootState {
  posts: {
    posts: Post[];
    categoriesCurrentPage: number;
    pageSize: number;
    loading: boolean;
    selectedCategory: string;
    postFetchTime: any;
    refreshTime: number;
  };
}

const CategoriesDisp = ({ params }: Props) => {
  const {
    loading,
    posts,
    selectedCategory,
    categoriesCurrentPage,
    pageSize,
    postFetchTime,
    refreshTime,
  } = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts() as any);
    } else {
      if (postFetchTime) {
        const lastFetchedDate = new Date(postFetchTime);
        const dataTIme = new Date();
        const diff = (dataTIme.getTime() - lastFetchedDate.getTime()) / 1000;

        if (diff > refreshTime) {
          dispatch(fetchPosts() as any);
        }
      }
    }
  }, []);

  useEffect(() => {
    updateDisplayPosts();
  }, [posts, categoriesCurrentPage, pageSize, params.slug]);
  let totalItems = 0;

  const updateDisplayPosts = () => {
    if (params.slug !== selectedCategory) {
      dispatch(resetCategoriesCurrentPage(params.slug));
    }
    const catPost = posts.filter((item) => item.categorySlug === params.slug);
    totalItems = catPost.length;
    setTotalPages(Math.ceil(totalItems / pageSize));
    const startIndex = (categoriesCurrentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const filteredPosts = catPost.slice(startIndex, endIndex);
    setDisplayPosts(filteredPosts);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <CategoriesBanner />
          {displayPosts.length > 0 ? (
            <DisplayBlog posts={displayPosts} />
          ) : (
            <p className='flex overflow-x-auto sm:justify-center py-6'>
              No post found under this category please try diffrent category
            </p>
          )}

          <div className='flex overflow-x-auto sm:justify-center py-6'>
            {totalPages > 1 ? (
              <Pagination
                layout='pagination'
                currentPage={categoriesCurrentPage}
                totalPages={totalPages}
                onPageChange={(e) => dispatch(updateCategoriesCurrentPage(e))}
                previousLabel='Go back'
                nextLabel='Go forward'
                showIcons
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoriesDisp;
