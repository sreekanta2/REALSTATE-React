import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img, Input } from "../../components";
import CheckBox from "../../components/Checkbox";
import {
  eyeHideImage,
  framerImage,
  googleImage,
  lockImage,
  userImage,
} from "../../importImages";

export default function Login() {
  const [type, setType] = useState(false);
  const handleCahange = () => {
    setType(!type);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-[480px] p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
      <div className="flex flex-col items-center justify-start w-full gap-[29px] my-[9px]">
        {" "}
        <div className="flex flex-col items-center justify-start w-full gap-[13px]">
          <div className="flex flex-row justify-center w-full pt-[5px]">
            <div className="flex flex-col items-center justify-start w-full gap-[15px]">
              <div className="flex flex-row justify-between items-start w-full">
                <Heading
                  size="4xl"
                  as="h1"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  Log in
                </Heading>
                <Button size="sm" shape="square" className="w-[30px] mt-1">
                  <Img src={framerImage} />
                </Button>
              </div>
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="user / email address"
                prefix={<Img src={userImage} alt="icon / 24px / user" />}
                className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
              />
              <Input
                shape="round"
                type={type ? "password" : "text"}
                name="password"
                placeholder="Password"
                prefix={<Img src={lockImage} alt="icon / 20px / lock " />}
                suffix={
                  <Img
                    onClick={handleCahange}
                    src={eyeHideImage}
                    alt="icon / 20px / eye-hide"
                  />
                }
                className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <CheckBox
              shape="round"
              name="remember"
              label="Remember"
              id="remember"
              className="mb-0.5 gap-2 text-left font-bold"
            />
            <Link to="/reset">
              <Heading
                size="md"
                as="h2"
                className="text-right text-lg font-bold"
              >
                Forgot Password
              </Heading>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]"></div>
          <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
            Log in
          </Button>
          <Button
            color="white A700"
            size="4xl"
            shape="round"
            leftIcon={<Img src={googleImage} alt="icon / 20px / google" />}
            className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
          >
            Log in with Google
          </Button>
        </div>
        <div className="h-px w-full bg-blue_gray-100_01" />
        <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
          <Link to="#" className="ml-[25px] sm:ml-5">
            <Heading
              size="lg"
              as="h2"
              className="!text-gray-600_02 tracking-[-0.40px] text-center text-xl font-semibold"
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
