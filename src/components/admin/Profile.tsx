import React from "react";
import { useAdminContext } from "./Dashboard";

const Profile = () => {
  const { tab, setTab } = useAdminContext();
  return <div>Profile - {tab}</div>;
};

export default Profile;
