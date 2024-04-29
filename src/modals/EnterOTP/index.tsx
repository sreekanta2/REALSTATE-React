import { Link } from "react-router-dom";
import { Button, Heading, Img, Text } from "../../components";

export default function Otp() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A708 rounded-[18px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[7px] gap-[31px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-6">
              {" "}
              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading
                    size="4xl"
                    as="hl"
                    className="tracking-[-0.72px] text-4xl font-extrabold"
                  >
                    Enter OTP
                  </Heading>
                  <Button size="sm" shape="square" className="w- [30px]">
                    <Img src="../../../public/image/img_icon_24px_close.svg" />
                  </Button>
                </div>
                <Text as="p" className="text-gray-900 text-lg font-normal">
                  Please check your mail, we sent an OTP code
                </Text>
              </div>
              <div className="flex flex-row justify-start gap-3">
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[68px]"
                >
                  0
                </Button>
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[68px]"
                >
                  0
                </Button>
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[60px]"
                >
                  0
                </Button>
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[60px]"
                >
                  0
                </Button>{" "}
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[60px]"
                >
                  0
                </Button>{" "}
                <Button
                  color="gray_600_02"
                  size="4xl"
                  variant="outline"
                  shape="round"
                  className="sm:px-5 font-bold min-w-[60px]"
                >
                  0
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button
              size="4xl"
              shape="round"
              className="w-full sm:px-5 font-bold"
            >
              Confirm
            </Button>
            <Button
              color="white_A700"
              size="2xl"
              shape="round"
              className="w-full sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
            >
              Request OTP Again
            </Button>
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
            <a href="#" className="mb-px ml-[58px] md:ml-5">
              <Heading
                size="1g"
                as="h2"
                className="Itext-gray-600_02 tracking-[.40px] text-center text-xl font-semibold"
              >
                Remember the Password?
              </Heading>
            </a>
            <a href="#" className="mr-[58px] md:mr-5">
              <Heading
                size="lg"
                as="h3"
                className="tracking-[0.40px] text-xl font-semibold"
              >
                <Link to="/login">Login</Link>
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
