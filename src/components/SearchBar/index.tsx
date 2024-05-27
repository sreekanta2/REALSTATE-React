/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Img } from "../Img/Img";
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

 
  return (
    <div className="flex flex-row justify-center w-full p-6 sm:p-5 bg-white-A700 rounded-[16px]">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <form className="flex flex-col items-center justify-start w-full gap-5">
            <Input
              shape="round"
              name="city"
              placeholder="City/Street"
              onChange={handleChange}
              suffix={
                <Img
                  src="../../../public/image/img_icon_20px_map.svg"
                  alt="icon / 20px/map"
                />
              }
              className="w-full gap-[35px] font-semibold border-blue_gray-108_01 border border-solid"
            />
            <SelectBox
              shape="round"
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
              onChange={handleChange}
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
