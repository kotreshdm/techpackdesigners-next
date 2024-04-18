"use client";
import React, { createContext, useContext, useState } from "react";
import DashSidebar from "./DashSidebar";

type AdminContextType = {
  tab: string;
  setTab: (tab: string) => void;
};

const AdminContext = createContext<AdminContextType>({
  tab: "",
  setTab: (tab: string) => {},
});

function Dashboard() {
  const [tab, setTab] = useState("");
  return (
    <AdminContext.Provider value={{ tab, setTab }}>
      <DashSidebar />
    </AdminContext.Provider>
  );
}

export default Dashboard;

export function useAdminContext() {
  return useContext(AdminContext);
}
