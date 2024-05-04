"use client";
import { Banner } from "flowbite-react";
import React from "react";
import Link from "next/link";
import Constants from "../../utils/Constants";

import { useSelector } from "react-redux";

interface Category {
  name: string;
  slug: string;
}

interface RootState {
  posts: {
    categories: Category[];
    posts: any[];
    categoriesCurrentPage: number;
    pageSize: number;
    loading: boolean;
    postFetchTime: any;
    refreshTime: number;
  };
}

const CategoriesBanner = () => {
  const { categories } = useSelector((state: RootState) => state.posts);

  return (
    <div>
      <Banner
        className='border-b-2 sticky top-0 border-gray-700'
        style={{
          zIndex: 0,
          maxHeight: "99",
        }}>
        <div className='flex w-full justify-between p-2 dark:bg-gray-800  catList'>
          <div className='mx-auto flex items-center'>
            <p className='flex items-center text-sm font-bold  text-gray-500  dark:text-gray-400'>
              {categories.map((cat: any) => (
                <span key={cat.slug} className='[&_p]:inline'>
                  <Link
                    href={`${Constants.Navigation.categoty}${cat.slug}`}
                    className='decoration-600 dark:decoration-500 inline font-medium underline decoration-solid underline-offset-2 hover:no-underline'>
                    {cat.name}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default CategoriesBanner;
