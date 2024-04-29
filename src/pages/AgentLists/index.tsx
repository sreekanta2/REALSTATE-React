import { useState } from "react";

import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import { RatingBar } from "../../components/RatingBar";
import { SelectBox } from "../../components/SelectBox";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function AgentList() {
  const agents = [1, 2, 3, 4, 5, 6];
  const [searchBarValue14, setSearchBarValue14] = useState("");
  return (
    <div className="flex flex-col items-center justify-start w-full gap-14">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
          <Heading
            size="4xl"
            as="hl"
            className="tracking-[-0.72px] text-4xl font-extrabold"
          >
            Some Nearby Good Agents
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
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[60px]">
        <div className="justify-center w-full gap-6 grid-cols-4 md:grid-cols-2 md:gap-5 md:px-5 sm:grid-cols-1 grid max-w-[1200px]">
          {agents.map((agent) => (
            <div
              key={agent}
              className="flex flex-col justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]"
            >
              <Img
                src="../../../public/image/img_rectangle_5615.png"
                alt="bruno fernandes"
                className="w-full md:h-auto rounded-tr-[10px] rounded-tl-[10px] object-cover"
              />
              <div>
                <div className="flex flex-col items-start justify-start w- [95%] gap-[7px] mx-1.5">
                  <Heading
                    size="1g"
                    as="h2"
                    className="tracking-[-0.40px] text-xl font-semibold"
                  >
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-3.5 ру-0.5">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      size={16}
                      className="flex justify-between"
                    />
                    <Heading as="h3" className="text-base font-semibold">
                      4.5 review
                    </Heading>
                  </div>
                  <Button
                    color="blue_gray_100_01"
                    variant="outline"
                    shape="round"
                    className="w-full sm:px-5 font-semibold"
                  >
                    <Link to={`/agentlist/${agent}`}> View Profile</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* end */}
      </div>
    </div>
  );
}
