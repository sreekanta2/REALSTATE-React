import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchbar from "../../../public/image/img_icon_24px_search.svg";
import logo from "../../../public/image/img_real_estate_1.svg";
import { CloseSVG } from "../../assets/images";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Input } from "../Input";
import { Text } from "../Text";

interface Props {
  className?: string;
}
export default function Header({ ...props }: Props) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
  };
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col  justify-between items-center w-full mx-auto md:gap-10 sm:px-5 md:px-0 max-w-[1200px] ">
        {/* logo */}

        <Link
          to=""
          className="flex flex-row justify-start items-start gap-[11px]"
        >
          <Img src={logo} alt="realestateone" className="h-[40px] w-[40px]" />

          <Text
            size="lg"
            as="p"
            className="mt-[5px] !text-orange-A700 !font-markoone text-xl font-normal"
          >
            Relasto
          </Text>
        </Link>

        {/* menu */}
        <div className="flex flex-row sm:flex-col justify-between items-center md:w-full lg:w-[41%] sm:gap-10">
          <div className="flex flex-row w-full flex-wrap sm:w-full justify-center gap-10">
            <div className="flex flex-row justify-start items-start   gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                <Link to="/">Home</Link>
              </Heading>
              {/* <Img
                src={arrowDownImage}
                alt="home_two"
                className="h-[16px] w-[16px] mt-0.5"
              /> */}
            </div>
            <div className="flex flex-row justify-start items-start gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                <Link to="/agentlist">Agents</Link>
              </Heading>
              {/* <Img
                src={arrowDownImage}
                alt="arrowdown_one"
                className="h-[16px] w-[16px]"
              /> */}
            </div>
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                <Link to="/about">About</Link>
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                <Link to="/contact">Contact</Link>
              </Heading>
            </div>{" "}
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                <Link to="/blogs">Blog</Link>
              </Heading>
            </div>
          </div>
        </div>
        {/* login */}
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
                />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-908 font-bold rounded-xl"
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
    </header>
  );
}
