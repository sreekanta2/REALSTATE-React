/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button } from "../Button";
import { Img } from "../Img";
import { Input } from "../Input";
import { SelectBox } from "../SelectBox";
interface Query {
  type: string;
  city: string;
  price: number;
}

interface Option {
  label: string;
  value: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    city: "",
    price: 0,
  });

  const dropDownOptions: Option[] = [
    { label: "Buy", value: "buy" },
    { label: "Shell", value: "shell" },
    { label: "Rent", value: "rent" },
  ];

  const [, setSelectedOption] = useState<Option>(dropDownOptions[0]); // Initialize with the first option

  const handleSelectChange = (selectedOption: Option | null) => {
    setSelectedOption(selectedOption || dropDownOptions[0]);
    setQuery((prev) => ({
      ...prev,
      type: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value);
  };
  return (
    <div className="flex flex-row justify-center w-full p-6 sm:p-5 bg-white-A700 rounded-[16px]">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <form className="flex flex-col items-center justify-start w-full gap-5">
            <Input
              shape="round"
              name="search"
              placeholder="Enter City And Address"
              value={searchText}
              handleChange={handleInputChange}
              suffix={
                searchText?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchText("")}
                    height={34}
                    width={34}
                    fillColor="#6e6e6eff"
                  />
                ) : (
                  <Img
                    src="../../../public/image/img_icon_24px_search_gray_600_02.svg"
                    alt="icon/24px/search"
                    className="cursor-pointer"
                  />
                )
              }
              className="w-full md:w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
            />
            <SelectBox
              shape="round"
              size="md"
              name="icon20pxupdowna"
              options={dropDownOptions}
              placeholder="Property Type"
              onChange={handleSelectChange}
              suffix={
                <Img
                  src="../../../public/image/img_icon_20px_updown_arrow.svg"
                  alt="icon/20px/up-down arrow"
                />
              }
              className="w-full   font-semibold border-blue_gray-108_01 border border-solid"
            />
            <Input
              shape="round"
              name="price"
              placeholder="Price Range"
              handleChange={handleChange}
              suffix={
                <Img
                  src="../../../public/image/img_icon_20px_updown_arrow.svg"
                  alt="icon/20px/up-down arrow"
                />
              }
              className="w-full gap-[35px] font-semibold border-blue_gray-108_01 border border-solid"
            />
          </form>

          <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
            <Link
              to={`/list?type=${query.type}&city=${query.city}&price=${query.price} `}
            >
              Search
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
