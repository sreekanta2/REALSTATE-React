import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Img } from "../Img/Img";
import { Text } from "../Text";

interface Props {
  className?: string;
  imageOne?: string;
  p286162ndave?: string;
  p3bedroom?: string;
  bathcounter?: string;
  sqftcounter?: string;
  p1bath?: string;
  viewDetails?: string;
  price?: string;
  id?: number;
}
export default function LandingPageCard({
  imageOne = "../../../public/image/img_image_260x384.png",
  p286162ndave = "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom = "3 Bed Room",
  bathcounter = "1 Bath",
  sqftcounter = "1,032 sqft",
  p1bath = "Family",
  viewDetails = "View Details",
  price = "$649,900",
  id = 1,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="overflow-hidden rounded-[10px]">
        <Img
          src={imageOne}
          alt="image_one"
          className="w-full md:h-auto sm:w-full  object-cover hover:scale-125 duration-150"
        />{" "}
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-[25px] my-2.5 md:px-5 max-w-[344px]">
        <div className="flex flex-row justify-start items-center w-full gap-3">
          <Img
            src="../../../public/image/img_icon_map_2.svg"
            alt="image_two"
            className="h-[24px] w-[24px]"
          />
          <Text className="!text-gray-900 text-base font-semibold">
            {p286162ndave}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[19px]">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <Img
                src="../../../public/image/img_icon_gray_700.svg"
                alt="3_bed_room_one"
                className="h-[20px] w-[20px]"
              />
              <Text className="text-gray-700 text-base font-semibold">
                {p3bedroom}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center gap-3">
              <Img
                src="../../../public/image/img_icon_gray_700_20x20.svg"
                alt="1_bath_one"
                className="h-[20px] w-[20px]"
              />
              <Text className="text-gray-700 text-base font-semibold">
                {bathcounter}
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <Img
                src="../../../public/image/img_icon_20x20.svg"
                alt="1032_sqft_one"
                className="h-[20px] w-[20px]"
              />
              <Text className="!text-gray-700 text-base font-semibold">
                {sqftcounter}
              </Text>
            </div>
            <div className="flex flex-row justify-start items-center gap-3">
              <Img
                src="../../../public/image/img_iocn_menu.svg"
                alt="family_one"
                className="h-[20px] w-[20px]"
              />
              <Text className="text-gray-700 text-base font-semibold">
                {p1bath}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full  md:pr-5 ">
          <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px">
            <Link to={`/property/${id}`}>{viewDetails}</Link>
          </Button>
          <Text className="text-gray-900 tracking-[-0.48px] text-2xl font-bold">
            {price}
          </Text>
        </div>
      </div>
    </div>
  );
}
