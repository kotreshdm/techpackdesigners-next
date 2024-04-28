import React, { createContext, useContext, useState } from "react";

type AdminContextType = {
  tab: string;
  setTab: (tab: string) => void;
};

const AdminContext = createContext<AdminContextType>({
  tab: "",
  setTab: (tab: string) => {},
});

const AdminContextProvider: React.FC = ({ children }: any) => {
  const [tab, setTab] = useState("");

  return (
    <AdminContext.Provider value={{ tab, setTab }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

export function useAdminContext() {
  return useContext(AdminContext);
}
