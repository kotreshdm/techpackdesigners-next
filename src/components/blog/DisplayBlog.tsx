import React, { useEffect, useState } from "react";
import Constants from "../../utils/Constants";
import LoadingComp from "../LoadingComp";
interface Post {
  postSlug: string;
  bannerImage?: string;
  postName: string;
  SEODescription: string;
}
interface Props {
  posts: Post[];
}
const DispalyBlog: React.FC<Props> = ({ posts }: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <LoadingComp />;
  }
  return (
    <div className='container grid grid-cols-1 md:grid-cols-4 gap-5 m-auto pb-3 pt-5 '>
      {posts &&
        posts.map((post: Post) => (
          <div
            key={post.postSlug}
            className='shadow-lg rounded-t-lg hover:shadow-2xl bg-white mt-3 shadow dark:bg-gray-800 dark:border-gray-700 '>
            {post.bannerImage ? (
              <a href={`${Constants.Navigation.blog}/${post.postSlug}`}>
                <img
                  className='rounded-t-lg m-auto'
                  src={post.bannerImage}
                  alt={post.postName}
                />
              </a>
            ) : (
              <div className='bg-gray-800 rounded-t-lg h-60 dark:bg-gray-800 dark:border-gray-700 noImageDiv flex justify-center items-center'>
                <p className='text-white p-5'>{post.postName}</p>
              </div>
            )}
            <div className='p-5'>
              <h5
                className='mb-2 font-bold tracking-tight text-gray-700 dark:text-white'
                style={{
                  maxHeight: "3.4rem",
                  minHeight: "3.4rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  lineHeight: "25px",
                  fontSize: "21px",
                  WebkitBoxOrient: "vertical",
                }}>
                <a href={`${Constants.Navigation.blog}/${post.postSlug}`}>
                  {post.postName}
                </a>
              </h5>

              <p
                className='mb-3 text-gray-700 dark:text-gray-400'
                style={{
                  maxHeight: "8rem",
                  minHeight: "5rem",
                  fontSize: "14px",
                  lineHeight: "21px",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}>
                {post.SEODescription}
              </p>
              <a
                href={`${Constants.Navigation.blog}/${post.postSlug}`}
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center  rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Read more
                <svg
                  className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DispalyBlog;
