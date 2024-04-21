import { useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img/Img";
import { Text } from "../Text";
import { Input } from "../Input";
import logo from "../../../public/image/img_real_estate_1.svg";
import arrowDownImage from "../../../public/image/img_arrow_down.svg";

interface Props {
  className?: string;
}
export default function Header({ ...props }: Props) {
  const [searchBarValue1, setSearchBarValue1] = useState("");
  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col  justify-between items-center w-full mx-auto md:gap-10 sm:px-5 md:px-0 max-w-[1200px]">
        {/* logo */}
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src={logo} alt="realestateone" className="h-[40px] w-[40px]" />
          <Text
            size="lg"
            as="p"
            className="mt-[5px] !text-orage-A700 !font-markoone text-xl font-normal"
          >
            Relasto
          </Text>
        </div>
        {/* menu */}
        <div className="flex flex-row sm:flex-col justify-between items-center md:w-full lg:w-[41%] sm:gap-10">
          <div className="flex flex-row w-full flex-wrap sm:w-full justify-center gap-10">
            <div className="flex flex-row justify-start items-start   gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                Home
              </Heading>
              <Img
                src={arrowDownImage}
                alt="home_two"
                className="h-[16px] w-[16px] mt-0.5"
              />
            </div>
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                Listing
              </Heading>
              <Img
                src={arrowDownImage}
                alt="arrowdown_one"
                className="h-[16px] w-[16px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                Agents
              </Heading>
              <Img
                src={arrowDownImage}
                alt="arrowdown_one"
                className="h-[16px] w-[16px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                Property
              </Heading>
            </div>{" "}
            <div className="flex flex-row justify-start items-start  gap-1.5">
              <Heading as="h6" className="text-base font-semibold">
                Blog
              </Heading>
            </div>
          </div>
        </div>
        {/* login */}
        <div className="flex flex-row justify-center items-center   md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e: string) => setSearchBarValue1(e)}
            prefix={
              <Img
                src="../../../public/image/img_icon_24px_search.svg"
                alt="icon / 24px / search"
                className="cursor-pointer"
              />
            }
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => setSearchBarValue1("")}
                  height={24}
                  width={24}
                  fillcolor="#191919ff"
                />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-908 font-bold"
          />
          <Button
            size="lg"
            shape="round"
            className="sm:px-5 font-semibold min-w-[94px]"
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
