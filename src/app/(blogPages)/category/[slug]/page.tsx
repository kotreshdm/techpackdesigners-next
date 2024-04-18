"use client";
import DisplayBlog from "@/components/blog/DisplayBlog";
import {
  resetCategoriesCurrentPage,
  updateCategoriesCurrentPage,
} from "@/redux/posts/postSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "flowbite-react";
import CategoriesBanner from "@/components/blog/CategoriesBanner";
import LoadingComp from "@/components/LoadingComp";

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
    categoriesPageSize: number;
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
    categoriesPageSize,
  } = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();
  const [displayPosts, setDisplayPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    updateDisplayPosts();
  }, [posts, categoriesCurrentPage, categoriesPageSize, params.slug]);
  let totalItems = 0;

  const updateDisplayPosts = () => {
    if (params.slug !== selectedCategory) {
      dispatch(resetCategoriesCurrentPage(params.slug));
    }
    const catPost = posts.filter((item) => item.categorySlug === params.slug);
    totalItems = catPost.length;
    setTotalPages(Math.ceil(totalItems / categoriesPageSize));
    const startIndex = (categoriesCurrentPage - 1) * categoriesPageSize;
    const endIndex = Math.min(startIndex + categoriesPageSize, totalItems);
    const filteredPosts = catPost.slice(startIndex, endIndex);

    setDisplayPosts(filteredPosts);
  };

  return (
    <div>
      <CategoriesBanner />
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          {displayPosts.length > 0 ? (
            <DisplayBlog posts={displayPosts} />
          ) : (
            <p className='flex overflow-x-auto sm:justify-center py-6'>
              No post found under this category please try diffrent category
            </p>
          )}

          <div className='flex overflow-x-auto sm:justify-center py-6 pagination-div'>
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
