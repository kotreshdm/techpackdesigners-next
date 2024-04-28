"use client";
import React, { createContext, useContext, useState } from "react";
import DashSidebar from "./DashSidebar";
import Profile from "./Profile";
import Category from "./Category";
import "react-quill/dist/quill.snow.css";
type AdminContextType<T> = {
  tab: string;
  setTab: (tab: string) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  categories: Array<T>;
  setCategories: (categories: Array<T>) => void;
  categoryCurrentPage: number;
  setCategoryCurrentPage: (categoryCurrentPage: number) => void;
};

const AdminContext = createContext<any>({
  tab: "",
  setTab: {},
  pageSize: 0,
  setPageSize: {},
  categories: [],
  setCategories: {},
  categoryCurrentPage: 0,
  setCategoryCurrentPage: {},
});

function Dashboard() {
  const [tab, setTab] = useState("");

  const [pageSize, setPageSize] = useState(10);
  // allCategories
  const [categories, setCategories] = useState([]);
  const [categoryCurrentPage, setCategoryCurrentPage] = useState(1);

  return (
    <AdminContext.Provider
      value={{
        tab,
        setTab,
        pageSize,
        setPageSize,
        categories,
        setCategories,
        categoryCurrentPage,
        setCategoryCurrentPage,
      }}>
      <div className='min-h-screen flex flex-col md:flex-row'>
        <div className='md:w-56'>
          <DashSidebar />
        </div>
        <div className='m-5'>
          {tab === "" && <Profile />}
          {tab === "dash" && <Profile />}
          {tab === "profile" && <Profile />}
          {tab === "posts" && <Profile />}
          {tab === "users" && <Profile />}
          {tab === "category" && <Category />}
        </div>
      </div>
    </AdminContext.Provider>
  );
}

export default Dashboard;

export function useAdminContext() {
  return useContext(AdminContext);
}
