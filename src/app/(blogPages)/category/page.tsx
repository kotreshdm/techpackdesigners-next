"use client";
import CategoriesBanner from "@/components/blog/CategoriesBanner";
import Constants from "@/utils/Constants";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function CategoriesPage() {
  const { categories } = useSelector((state: any) => state.posts);

  return (
    <>
      <CategoriesBanner />
      <div className='flex justify-center flex-wrap p-10'>
        {categories.map(
          (cat: {
            name: string;
            description: string;
            slug: string;
            catBanner: string;
          }) => (
            <div key={cat.slug} className='w-full md:w-1/2 p-2'>
              <a
                href={`${Constants.Navigation.categoty}${cat.slug}`}
                className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <Image
                  src={cat.catBanner}
                  alt={cat.slug}
                  className='object-cover w-full rounded-t-lg h-100 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg'
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {cat.name}
                  </h5>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {cat.description}
                  </p>
                </div>
              </a>
            </div>
          )
        )}
      </div>
    </>
  );
}
