"use client";
import Dashboard from "@/components/admin/Dashboard";
import SignIn from "@/components/admin/SignIn";
import React from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  console.log("current user", currentUser);
  if (!currentUser) {
    return <SignIn />;
  }
  return <Dashboard />;
};

export default DashboardPage;
