import { Link, useParams } from "react-router-dom";
import image1 from "../../../public/image/img_icon_24px_v_gray_600_02.svg";
import ractangule from "../../../public/image/img_rectangle_5617_350x384.png";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

export default function BlogCard() {
  const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-start w-full gap-6 border p-4 rounded-md bg-white-A700">
      <div className="flex flex-col items-center justify-start w-full gap-3">
        <div className="overflow-hidden rounded-[10px]">
          <Img
            src={ractangule}
            alt="image_one"
            className="w-full md:h-auto sm:w-full  object-cover hover:scale-125 duration-150"
          />{" "}
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <Button
            color="blue_gray_100_01"
            size="md"
            variant="outline"
            shape="round"
            className="font-semibold min-w-[89px] sm:min-w-full"
          >
            Business
          </Button>
          <div className="flex flex-col items-center justify-start w-full gap-[15px]">
            <Heading
              size="2xl"
              as="h2"
              className="tracking-[-0.48px] text-2xl font-bold leading-[135%]"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Heading>
            <div className="flex flex-row justify-start w-full gap-6">
              <div className="flex flex-row justify-start items-start w-[23%] gap-1.5">
                <div className="h-[5px] w-[5px] mt-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading
                  size="xs"
                  as="h3"
                  className="text-gray-600_02 text-xs font-semibold"
                >
                  July 20, 2022
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-1.5">
                <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading
                  size="xs"
                  as="h4"
                  className="!text-gray-600_02 text-xs font-semibold"
                >
                  7 min read
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-2">
        <Link
          to={`/blog/${id}`}
          className="mt-6.5 !text-gray-600_02 text-lg font-bold"
        >
          Continue Reading
        </Link>

        <Img src={image1} alt="continue" className="h-[24px] w-[24px]" />

        {/* <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" /> */}
      </div>
    </div>
  );
}
