import { useState } from "react";

import { Link } from "react-router-dom";
import image1 from "../../../public/image/img_rectangle_5615.png";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input } from "../../components";
import { RatingBar } from "../../components/RatingBar";
import { SelectBox } from "../../components/SelectBox";
import {
  dropDownOptions,
  dropDownOptions2,
  dropDownOptions3,
} from "../../constants";
import {
  closeImage,
  downArrow,
  normalSearchImage,
  searchImage,
} from "../../importImages";
interface Option {
  label: string;
  value: string;
}

export default function AgentList() {
  const agents = [1, 2, 3, 4, 5, 6];
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
    <div className="flex flex-col items-center justify-start w-full gap-14 py-10">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px] md:px-5 max-w-[1200px]">
          <Heading
            size="4xl"
            as="h1"
            className="tracking-[-0.72px] text-4xl font-extrabold"
          >
            Some Nearby Good Agents
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
                  <Img src={normalSearchImage} alt="icon / 20px / search" />
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
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-[60px]">
        <div className="justify-center w-full gap-6 grid-cols-4 md:grid-cols-2 md:gap-5 md:px-5 sm:grid-cols-1 grid max-w-[1200px]">
          {agents.map((agent) => (
            <div
              key={agent}
              className="flex flex-col justify-center w-full p-[13px] rounded-bl-[10px] rounded-br-[10px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]"
            >
              <Img
                src={image1}
                alt="bruno fernandes"
                className="w-full md:h-auto rounded-tr-[10px] rounded-tl-[10px] object-cover"
              />
              <div>
                <div className="flex flex-col items-start justify-start w- [95%] gap-[7px] mx-1.5">
                  <Heading
                    size="lg"
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
