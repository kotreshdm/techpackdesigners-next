"use client";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar, TextInput, Button } from "flowbite-react";
import Constants from "../utils/Constants";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/theme/themeSlice";
import { useRouter } from "next/navigation";
import { updateSearch } from "@/redux/posts/postSlice";
const ApplicationHeader = () => {
  const path = usePathname();
  const { theme } = useSelector((state: any) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const navMenu = [
    {
      label: "Home",
      url: Constants.Navigation.home,
    },
    {
      label: "Blog",
      url: Constants.Navigation.blog,
    },
  ];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(updateSearch(searchTerm));
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <Navbar className='border-b-2 sticky top-0 z-30'>
      <div className='flex'>
        <Link href='/' passHref>
          <p className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            Blog
          </p>
        </Link>

        <Navbar.Collapse className='mt-2 ml-10'>
          {navMenu.map((menuItem) => (
            <Navbar.Link
              active={path === menuItem.url}
              as={"div"}
              key={menuItem.url}>
              <Link href={menuItem.url} passHref>
                <>{menuItem.label}</>
              </Link>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </div>
      <div className='flex gap-0 md:order-4'>
        <form onSubmit={handleSubmit}>
          <TextInput
            type='text'
            placeholder='Search...'
            className='hidden lg:inline hover:pointer'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button onClick={handleSubmit} className='w-12 h-10 mr-3' color='gray'>
          <AiOutlineSearch />
        </Button>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default ApplicationHeader;
