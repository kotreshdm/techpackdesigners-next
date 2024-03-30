"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from "dompurify";
import { getPostBySlug, loadingPost } from "@/redux/posts/postSlice";
export default function BlogDetails({ slug }: any) {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state: any) => state.posts);

  useEffect(() => {
    dispatch(loadingPost());
    dispatch(getPostBySlug(slug));
  }, [dispatch, slug]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='details container'>
      <div className='grid grid-cols-2 md:grid-cols-12 '>
        <div className='col-span-1 md:col-span-1 p-4'></div>
        <div className='col-span-10 md:col-span-10 p-4'>
          {/* <p className='dateAuthor'>
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            BY <span>{post.userName}</span>
          </p> */}
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
              {/* <SharePost
                url={url}
                quote={quote}
                hashtag={hashtag}
                className='side-bar'
              /> */}
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
          {/* <SharePost url={url} quote={quote} hashtag={hashtag} /> */}
        </div>
      </div>
      {/* {keepReading.length ? (
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
      )} */}
    </div>
  );
}
