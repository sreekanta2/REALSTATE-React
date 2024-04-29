import { useState } from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import { GoogleMap } from "../../components/GoogleMap";
import LandingPageCard from "../../components/LandingPageCard";
import { SelectBox } from "../../components/SelectBox";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const images = [
  { src: "../../../public/image/img_image_1.png", id: 1 },
  { src: "../../../public/image/img_image_2.png", id: 2 },
  { src: "../../../public/image/img_image_3.png", id: 3 },
  { src: "../../../public/image/img_image_4.png", id: 4 },
  { src: "../../../public/image/img_image_5.png", id: 5 },
];
export default function ListingPage() {
  const [searchBarValue8, setSearchBarValue8] = useState("");
  return (
    <>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
          <Heading
            size="4xl"
            as="hl"
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
                value={searchBarValue8}
                onChange={(e: string) => setSearchBarValue8(e)}
                suffix={
                  searchBarValue8?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue8("")}
                      height={24}
                      width={24}
                      fillcolor="#626262ff"
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
              <Button
                color="white_A700™"
                size="4xl"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_24px_plus.svg"
                    alt="icon / 24px / plus"
                  />
                }
                className="gap-3 text-gray-700 font-bold border-blue_gray-100_01 border border-solid min-w-[113px]"
              >
                More
              </Button>
              <Button
                size="4xl"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_20px_search.svg"
                    alt="icon / 20px / search"
                  />
                }
                className="gap-2.5 font-bold min-w-[124px]"
              >
                Search
              </Button>
            </div>
            {/* feltiaring start */}
            <div className="flex flex-row md:flex-col justify-start w-full gap-2.5 md:gap-5">
              <Button
                color="blue_gray_100"
                size="md"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_16px_close.svg"
                    alt="icon / 16px / close"
                  />
                }
                className="gap-2 font-semibold min-w-[145px]"
              >
                Bathrooms 2+
              </Button>
              <Button
                color="blue_gray_100"
                size="md"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_16px_close.svg"
                    alt="icon / 16px / close"
                  />
                }
                className="gap-2 font-semibold min-w-[243px]"
              >
                Square Feet 750 2000 sq. ft
              </Button>
              <Button
                color="blue_gray_100"
                size="md"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_16px_close.svg"
                    alt="icon / 16px / close"
                  />
                }
                className="gap-2 font-semibold min-w-[151px]"
              >
                Year Built 5 - 15
              </Button>
              <Button
                color="blue_gray_100"
                size="md"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_16px_close.svg"
                    alt="icon / 16px / close"
                  />
                }
                className="gap-2 !text-gray-900 font-semibold min-w-[168px]"
              >
                For Sale By Agent
              </Button>
              <Button
                color="blue_gray_100"
                size="md"
                variant="outline"
                shape="round"
                rightIcon={
                  <Img
                    src="../../../public/image/img_icon_16px_close.svg"
                    alt="icon / 16px / close"
                  />
                }
                className="gap-2 !text-gray-900 font-semibold min-w-[174px]"
              >
                New Construction
              </Button>
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
                      <LandingPageCard className="flex flex-col items-center justify-start w-full" />
                      {images.map((image) => (
                        <LandingPageCard
                          key={image.id}
                          id={image.id}
                          imageOne={image.src}
                          className="flex flex-col items-center justify-start w-full"
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
