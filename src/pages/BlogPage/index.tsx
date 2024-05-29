import React, { useState } from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import BlogCard from "../../components/BlogCard";
import { SelectBox } from "../../components/SelectBox";
import {
  dropDownOptions,
  dropDownOptions2,
  dropDownOptions3,
} from "../../constants";
import {
  closeImage,
  downArrow,
  rightArrowNormal,
  searchImage,
} from "../../importImages";
interface Option {
  label: string;
  value: string;
}
export default function BlogPage() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
  };
  const [selectedValues, setSelectedValues] = useState<Record<string, Option>>(
    {}
  );

  const handleSelectChange = (name: string, value: Option) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const removeSelectedValue = (valueToRemove: string) => {
    setSelectedValues((prevValues) => {
      const updatedSelectedValues = { ...prevValues };
      Object.keys(updatedSelectedValues).forEach((key) => {
        if (updatedSelectedValues[key].label === valueToRemove) {
          delete updatedSelectedValues[key];
        }
      });
      return updatedSelectedValues;
    });
  };

  const selectedValuesArray = Object.values(selectedValues);
  const list = [1, 2, 3, 4];
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01 pt-10">
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
                <div className="flex flex-col items-center justify-start w-full gap-3">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-5">
                    <Input
                      shape="round"
                      name="search"
                      placeholder="Enter your address"
                      value={searchText}
                      handleChange={handleInputChange}
                      suffix={
                        searchText?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchText("")}
                            height={24}
                            width={24}
                            fillColor="#626262ff"
                          />
                        ) : (
                          <Img
                            src={searchImage}
                            alt="icon/24px / search"
                            className="cursor-pointer"
                          />
                        )
                      }
                      className="w-[36%] md:w-full gap-[35px] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                    />

                    <SelectBox
                      shape="round"
                      size="md"
                      options={dropDownOptions}
                      onChange={(value: Option) =>
                        handleSelectChange("active_one", value)
                      }
                      indicator={<Img src={downArrow} alt="arrow_down" />}
                      placeholder="Popular"
                      className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-108_01 border border-solid"
                    />

                    <SelectBox
                      shape="round"
                      size="md"
                      options={dropDownOptions2}
                      onChange={(value: Option) =>
                        handleSelectChange("active_two", value)
                      }
                      indicator={<Img src={downArrow} alt="arrow_down" />}
                      placeholder="Popular"
                      className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-108_01 border border-solid"
                    />

                    <SelectBox
                      shape="round"
                      size="md"
                      options={dropDownOptions3}
                      onChange={(value: Option) =>
                        handleSelectChange("active_three", value)
                      }
                      indicator={<Img src={downArrow} alt="arrow_down" />}
                      placeholder="Popular"
                      className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-108_01 border border-solid"
                    />

                    <Button
                      shape="round"
                      rightIcon={
                        <Img src={searchImage} alt="icon / 20px / search" />
                      }
                      className="gap-2.5 font-bold min-w-[124px] h-[60px]"
                    >
                      Search
                    </Button>
                  </div>
                  {/* faltering start */}
                  <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
                    {selectedValuesArray.length > 0 &&
                      selectedValuesArray.map((item: Option) => (
                        <Button
                          key={item.value}
                          color="blue_gray_100"
                          size="md"
                          variant="outline"
                          shape="round"
                          rightIcon={
                            <Img
                              onClick={() => removeSelectedValue(item.value)}
                              src={closeImage}
                              alt="icon / 16px / close"
                            />
                          }
                          className="gap-2 font-semibold min-w-[145px]"
                        >
                          {item.value}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
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
                    <Img src={rightArrowNormal} alt="icon/16px/arrow right" />
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
