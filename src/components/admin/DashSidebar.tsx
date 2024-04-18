import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useAdminContext } from "./Dashboard";
import { signoutSuccess } from "@/redux/user/userSlice";
const DashSidebar = () => {
  const dispatch = useDispatch();
  const { tab } = useAdminContext();
  const { currentUser } = useSelector((state: any) => state.user);

  const handleSignout = () => {
    dispatch(signoutSuccess());
  };
  return (
    <Sidebar className='w-full md:w-56 min-h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          {currentUser && currentUser.isAdmin && (
            <Sidebar.Item
              active={tab === "dash" || !tab}
              icon={HiChartPie}
              as='div'>
              Dashboard
            </Sidebar.Item>
          )}

          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={currentUser.isAdmin ? "Admin" : "User"}
            labelColor='dark'
            as='div'>
            Profile
          </Sidebar.Item>

          {currentUser.isAdmin && (
            <>
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as='div'>
                Posts
              </Sidebar.Item>

              <Sidebar.Item
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                as='div'>
                Users
              </Sidebar.Item>

              <Sidebar.Item
                active={tab === "comments"}
                icon={HiAnnotation}
                as='div'>
                Comments
              </Sidebar.Item>
            </>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
