import { useState } from "react";
import { Link } from "react-router-dom";
import searchbar from "../../../public/image/img_icon_24px_search.svg";
import logo from "../../../public/image/img_real_estate_1.svg";
import { CloseSVG } from "../../assets/images";
import { Button } from "../Button";
import { Img } from "../Img";
import { Input } from "../Input";

export default function Header2() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
  };
  return (
    <div
      className="navbar bg-white-A700 w-full px-14 border-b text-gray-700 font-semibold sticky top-0 left-0 right-0 z-20 flex justify-between
    "
    >
      <div className="">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hidden md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu   dropdown-content mt-3 z-[1] p-2 shadow bg-white-A700     border-b text-gray-700 w-64 rounded-box  "
          >
            <li className="w-full">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/agentlist">Agents</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
        <Img src={logo} alt="realestateone" className="h-[40px] w-[40px]" />
      </div>
      <div className="  md:hidden  lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agentlist">Agents</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>
      </div>
      <div className=" ">
        <div className="flex flex-row justify-center items-center   md:w-full gap-2.5">
          <Input
            size="sm"
            shape="square"
            type="text"
            name="search"
            placeholder="Search"
            value={searchText}
            handleChange={handleInputChange}
            prefix={
              <Img
                src={searchbar}
                alt="icon / 24px / search"
                className="cursor-pointer"
              />
            }
            suffix={
              searchText?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchText("")}
                  height={24}
                  width={24}
                  fillColor="#191919ff"
                  className="cursor-pointer"
                />
              ) : null
            }
            className="w-44 gap-2 text-gray-600 font-bold rounded-xl border"
          />
          <Link to="/login">
            <Button
              size="lg"
              shape="round"
              className="sm:px-5 font-semibold min-w-[94px]"
            >
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
