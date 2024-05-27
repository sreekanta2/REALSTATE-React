import React from "react";

import { useParams } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import BlogCard from "../../components/BlogCard";
import { SelectBox } from "../../components/SelectBox";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function BlogPage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");
  const { id = 1 } = useParams();
  const list = [1, 2, 3, 4];
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px]">
                <Heading
                  size="4xl"
                  as="h1"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  Real Estate News & Blogs
                </Heading>
                <div className="flex flex-row md:flex-col justify-start sm:w-full gap-4 md:gap-5">
                  <Input
                    shape="round"
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue14}
                    onChange={(e: string) => setSearchBarValue14(e)}
                    suffix={
                      searchBarValue14?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue14("")}
                          height={34}
                          width={34}
                          fillcolor="#6e6e6eff"
                        />
                      ) : (
                        <Img
                          src="../../../public/image/img_icon_24px_search_gray_600_02.svg"
                          alt="icon/24px/search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[50%] md:w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="../../../public/image/img_arrowdown_gray_600_02.svg"
                        alt="arrow_down"
                      />
                    }
                    name="active"
                    placeholder="Category"
                    options={dropDownOptions}
                    className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={
                      <Img
                        src="../../../public/image/img_arrowdown_gray_600_02.svg"
                        alt="arrow_down"
                      />
                    }
                    name="active_one"
                    placeholder="Popular"
                    options={dropDownOptions}
                    className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-108_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  {list.map((id) => (
                    <BlogCard key={id} />
                  ))}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button
                    color="gray_700"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    1
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    2
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    3
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    4
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    5
                  </Button>
                </div>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  rightIcon={
                    <Img
                      src="../../../public/image/img_icon_16px_arrow_right.svg"
                      alt="icon/16px/arrow right"
                    />
                  }
                  className="gap-1 font-semibold min-w-[134px]"
                >
                  Next Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
