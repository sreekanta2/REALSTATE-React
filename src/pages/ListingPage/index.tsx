/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import { GoogleMap } from "../../components/GoogleMap";
import LandingPageCard from "../../components/LandingPageCard";
import { SelectBox } from "../../components/SelectBox";
import {
  dropDownOptions,
  dropDownOptions2,
  dropDownOptions3,
  images,
} from "../../constants";

interface Option {
  label: string;
  value: string;
}

export default function ListingPage() {
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

  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
          <Heading
            size="4xl"
            as="h1"
            className="tracking-[-0.72px] text-4xl font-extrabold"
          >
            Find Property
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
                      src="../../../public/image/img_icon_24px_search_gray_700.svg"
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
                indicator={
                  <Img
                    src="../../../public/image/img_arrowdown_gray_600_02.svg"
                    alt="arrow_down"
                  />
                }
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
                indicator={
                  <Img
                    src="../../../public/image/img_arrowdown_gray_600_02.svg"
                    alt="arrow_down"
                  />
                }
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
                indicator={
                  <Img
                    src="../../../public/image/img_arrowdown_gray_600_02.svg"
                    alt="arrow_down"
                  />
                }
                placeholder="Popular"
                className="w-[43%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-108_01 border border-solid"
              />

              <Button
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_20px_search.svg"
                    alt="icon / 20px / search"
                  />
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
                        src="../../../public/image/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[145px]"
                  >
                    {item.value}
                  </Button>
                ))}
            </div>
            {/* feltiaring end */}
            {/* googlemap start */}
            <div className="flex flex-col items-center justify-start w-full">
              <div className="grid md:grid-cols-1 grid-cols-5 justify-start items-start w-full gap-6 md:gap-5 md:px-5 max-w-[1200px] px-6">
                <GoogleMap
                  showMarker={false}
                  className="h-[511px] col-span-2 "
                />
                <div className="flex flex-col col-span-3 items-center justify-start    w-full gap-[60px]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full gap-6 grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      {images.map((image) => (
                        <LandingPageCard
                          key={image.id}
                          id={image.id}
                          imageOne={image.src}
                          className="bg-white-A700 border rounded-[10px] p-4"
                        />
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
                          alt="icon / 16px / arrow right"
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

            {/* googlemap end  */}
          </div>
        </div>
      </div>
    </>
  );
}
