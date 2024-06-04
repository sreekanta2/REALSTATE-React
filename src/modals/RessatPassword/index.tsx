import { Link } from "react-router-dom";
import { Button, Heading, Img, Input, Text } from "../../components";
import { emailImage, lockImage } from "../../importImages";

export default function ResetPassword() {
  return (
    <div className="h-screen flex   justify-center  bg-gray-50 w-screen">
      <div className="flex flex-col items-center justify-start w-96 bg-white-A700 p-4 border rounded-xl gap-[29px] my-[9px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[22px]">
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading
                  size="4xl"
                  as="h1"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  Reset Password
                </Heading>
                <Button size="sm" shape="square" className="w- [38px]">
                  <Img src={lockImage} />
                </Button>
              </div>
              <Text
                as="p"
                className="text-gray-900 text-lg font-normal leading-[180%]"
              >
                Enter the email address associated with your account and
                we&#39;11 send you a link to reset your password.
              </Text>
            </div>
            <Input
              shape="round"
              type="email"
              name="password"
              placeholder="user / email address"
              prefix={<Img src={emailImage} alt="icon / 24px / email" />}
              className="w-full gap-3.5 font-semibold border-blue_gray-108_01 border border-solid"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[18px]">
          <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
            Get OTP
          </Button>
          <Button
            color="white_A700"
            size="2xl"
            shape="round"
            className="w-full sm:px-5 text-gray-980 font-bold border-gray-600_02 border border-solid"
          >
            Return to sign in
          </Button>
        </div>
        <div className="h-px w-full bg-blue_gray-100_01" />
        <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
          <Link to="#" className="ml-[25px] sm:ml-5">
            <Heading
              size="lg"
              as="h2"
              className="text-gray-600_02 tracking-[-0.40px] text-center text-xl font-semibold"
            >
              Don't have an account?
            </Heading>
          </Link>
          <Link to="#" className="mr-[25px] sm:mr-5">
            <Heading
              size="lg"
              as="h3"
              className="tracking-[-0.40px] text-xl font-semibold"
            >
              <Link to="/create-account"> Create Account</Link>
            </Heading>
          </Link>
        </div>
      </div>
    </div>
  );
}
