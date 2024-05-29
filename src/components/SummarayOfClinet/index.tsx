import imageFramer from "../../../public/image/img_frame.svg";
import orange_icon from "../../../public/image/img_frame_orange_a700.svg";
import orange_icon2 from "../../../public/image/img_icon.svg";
import orange_icon3 from "../../../public/image/img_icon_orange_a700.svg";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";

export default function SummaryOfClient() {
  return (
    <div className="flex flex-row justify-center w-full mx-[70px] md:mx-5 max-w-[1200px]">
      <div className=" flex flex-row md:flex-col w-full gap-[100px] md:gap-10">
        <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
          <Button
            color="white_A700"
            size="3xl"
            shape="circle"
            className="w-[60px]"
          >
            <Img src={imageFramer} />
          </Button>
          <div className="flex flex-col items-start justify-start w-full gap-[13px]">
            <Heading
              size="5xl"
              as="h4"
              className="tracking-[-0.92px] text-[46px] font-extrabold"
            >
              $15.4M
            </Heading>

            <Heading
              size="lg"
              as="h5"
              className="!text-blue_gray-600 tracking-[-0.40px] text-xl font-semibold leading-[140%]"
            >
              <>
                Owned from
                <br />
                Properties transactions
              </>
            </Heading>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
          <Button
            color="white_A700"
            size="3xl"
            shape="circle"
            className="w-[60px]"
          >
            <Img src={orange_icon} />
          </Button>
          <div className="flex flex-col items-start justify-start w-full gap-[13px]">
            <Heading
              size="5xl"
              as="h4"
              className="tracking-[-0.92px] text-[46px] font-extrabold"
            >
              25K+
            </Heading>

            <Heading
              size="lg"
              as="h5"
              className="!text-blue_gray-600 tracking-[-0.40px] text-xl font-semibold leading-[140%]"
            >
              Properties for Buy & sell Successfully
            </Heading>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
          <Button
            color="white_A700"
            size="3xl"
            shape="circle"
            className="w-[60px]"
          >
            <Img src={orange_icon2} />
          </Button>
          <div className="flex flex-col items-start justify-start w-full gap-[13px]">
            <Heading
              size="5xl"
              as="h6"
              className="tracking-[-0.92px] text-[46px] font-extrabold"
            >
              500
            </Heading>
            <Heading
              size="lg"
              as="h5"
              className="!text-blue_gray-600 tracking-[-0.40px] text-xl font-semibold leading-[140%]"
            >
              <>
                Daily completed <br />
                transactions
              </>
            </Heading>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[19%] md:w-full mb-[26px] gap-[18px]">
          <Button
            color="white_A700"
            size="3xl"
            shape="circle"
            className="w-[60px]"
          >
            <Img src={orange_icon3} />
          </Button>
          <div className="flex flex-col items-start justify-start w-full gap-4">
            <Heading
              size="5xl"
              as="h1"
              className="tracking-[-0.92px] text-[46px] font-extrabold"
            >
              600+
            </Heading>
            <Heading
              size="lg"
              as="h5"
              className="!text-blue_gray-600 tracking-[-0.40px] text-xl font-semibold"
            >
              Reagular Clients
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
