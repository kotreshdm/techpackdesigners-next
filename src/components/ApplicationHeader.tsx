"use client";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar, TextInput, Button, Dropdown } from "flowbite-react";
import Constants from "../utils/Constants";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/theme/themeSlice";
import { useRouter } from "next/navigation";
import {
  fetchCategories,
  fetchPorifilio,
  fetchPosts,
  updateSearch,
} from "@/redux/posts/postSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ApplicationHeader = () => {
  const path = usePathname();
  const { theme } = useSelector((state: any) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSearch(searchTerm));
    dispatch(fetchCategories() as any);
    dispatch(fetchPosts() as any);
    dispatch(fetchPorifilio() as any);
    console.log("Refreshed......");
  }, []);

  const navMenu = [
    {
      label: "Home",
      url: Constants.Navigation.home,
    },
    {
      label: "Blog",
      url: Constants.Navigation.blog,
    },
    {
      label: "About",
      url: Constants.Navigation.about,
    },
    {
      label: "Services",
      url: Constants.Navigation.services,
    },
    {
      label: "Techpack",
      url: Constants.Navigation.techPack,
    },
    {
      label: "Portfolio",
      url: Constants.Navigation.portfolio,
    },
  ];
  const handleChange = (v: any) => {
    setSearchTerm(v);
    dispatch(updateSearch(v));
    if (v.length > 3) {
      router.push(Constants.Navigation.search);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm.length > 3) {
      router.push(Constants.Navigation.search);
    }
  };
  return (
    <>
      <ToastContainer
        autoClose={6000}
        position='top-right'
        className='toast-container'
        toastClassName='dark-toast'
      />

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
                  {menuItem.label}
                </Link>
              </Navbar.Link>
            ))}
            <Dropdown arrowIcon={true} inline label={"Manufacturing"}>
              <Link href={"/apparel-production"}>
                <Dropdown.Item>Production</Dropdown.Item>
              </Link>
              <Link href={"/price"}>
                <Dropdown.Item>Package & Price</Dropdown.Item>
              </Link>
              <Link href={"/techpack-quote"}>
                <Dropdown.Item>TechPack Quote</Dropdown.Item>
              </Link>
              <Link href={"/career"}>
                <Dropdown.Item>Career</Dropdown.Item>
              </Link>
            </Dropdown>
            <Navbar.Link active={path === "/contact"} as={"div"}>
              <Link href='/contact' passHref>
                Contact
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
        <div className='flex gap-0 md:order-4'>
          <form onSubmit={handleSubmit}>
            <TextInput
              type='text'
              placeholder='Search...'
              className='hidden lg:inline hover:pointer rounded-tr-none rounded-br-none'
              value={searchTerm}
              onChange={(e) => handleChange(e.target.value)}
            />
          </form>
          <Button
            onClick={handleSubmit}
            className='rounded-tl-none rounded-bl-none w-12 h-10 mr-3'
            color='gray'>
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
    </>
  );
};

export default ApplicationHeader;
