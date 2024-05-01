"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { getPostBySlug, loadingPost } from "@/redux/posts/postSlice";
import "./BlogDetails.css";
import SharePost from "./SharePost";
import Constants from "@/utils/Constants";
import DispalyBlog from "./DisplayBlog";
import CategoriesBanner from "./CategoriesBanner";
import LoadingComp from "../LoadingComp";
import Head from "next/head";
export default function BlogDetails({ slug }: any) {
  const dispatch = useDispatch();
  const { posts, post, loading } = useSelector((state: any) => state.posts);
  const [keepReading, setKeepReading] = useState<any[]>([]);
  useEffect(() => {
    dispatch(loadingPost());
    dispatch(getPostBySlug(slug));
  }, [dispatch, slug, posts]);

  useEffect(() => {
    if (slug && posts.length > 0) {
      let filteredPosts = posts.filter(
        (item: any) =>
          item.categorySlug === post.categorySlug && item.postId !== post.postId
      );
      if (filteredPosts.length === 0) {
        filteredPosts = posts.filter((item: any) => item.postId != post.postId);
      }
      const shuffledPosts = filteredPosts.sort(() => Math.random() - 0.5);
      const readMore = shuffledPosts.slice(0, 4);
      setKeepReading(readMore);
    }
  }, [post]);
  let url = "blog/" + slug;
  let quote = post?.SEODescription;
  let hashtag = "#" + post?.SEOKeywords;
  if (loading) {
    return <LoadingComp />;
  }
  if (!post.postName) {
    return (
      <>
        <CategoriesBanner />
        <h1 className='flex justify-center p-20'>Requested post not found.</h1>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{"metadata.title"}</title>
        <meta name='description' content={"metadata.description"} />
        <meta name='keywords' content={"metadata.keywords"} />
        {/* Add other metadata tags as needed */}
      </Head>
      <CategoriesBanner />
      <div className='details container'>
        <div className='grid grid-cols-2 md:grid-cols-12 '>
          <div className='col-span-1 md:col-span-1'></div>
          <div className='col-span-11 md:col-span-11 '>
            <h2 className='title'>{post.postName}</h2>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-12  p-3'>
          <div className='col-span-3 md:col-span-3 p-2'>
            <div className='grid items-center justify-center mb-4 share-scetion'>
              <div className='text-sm text-gray-500 dark:text-white mb-10'>
                <h4> Category :</h4>
                {post.categoryName}
              </div>
              <div className='text-sm text-gray-500 dark:text-white mb-10'>
                <h4> Created By :</h4>
                {post.userName}
              </div>

              <div className='text-sm text-gray-500 dark:text-white mb-10'>
                <h4> Crated At :</h4>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className='text-sm text-gray-500 dark:text-white mb-10'>
                <h4> Last updated :</h4>
                {new Date(post.updatedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className='text-sm text-gray-500 dark:text-white mb-10'>
                <h4>Share on :</h4>
                <SharePost
                  url={url}
                  quote={quote}
                  hashtag={hashtag}
                  className='side-bar'
                />
              </div>
            </div>
          </div>
          <div className='col-span-9 md:col-span-9 p-2'>
            <div
              className='blog-description'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDescription), // Use DOMPurify.sanitize
              }}
            />
            <div className='share-scetion'>
              <h4>Share On</h4>
            </div>
            <SharePost
              url={url}
              quote={quote}
              hashtag={hashtag}
              className='Bottom'
            />
          </div>
        </div>
        {keepReading.length ? (
          <div className='grid grid-cols-2 md:grid-cols-12 p-0 keep-reading-container'>
            <div className='col-span-3 md:col-span-1 '></div>
            <div className='col-span-9 md:col-span-11 keep-reading-div'>
              <h2 className='keep-reading'>
                Keep <span> Reading ......</span>
              </h2>
            </div>
            <div className='col-span-3 md:col-span-1 '></div>
            <div className='col-span-9 md:col-span-12 pl-10 '>
              <DispalyBlog posts={keepReading} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
