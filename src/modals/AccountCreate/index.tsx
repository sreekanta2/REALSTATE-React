import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img, Input } from "../../components";
import CheckBox from "../../components/Checkbox";
import {
  emailImage,
  eyeHideImage,
  googleImage,
  lockImage,
  userImage,
} from "../../importImages";

export default function CreateAccount() {
  const [type, setType] = useState(false);
  const handleChange = () => {
    setType((prev) => !prev);
  };
  return (
    <div className="h-screen flex   justify-center  bg-gray-50 w-screen">
      <div className="flex flex-col  bg-white-A700 p-4 rounded-xl    mt-2.5 mb-[7px] gap-[29px] w-2/4 ">
        <div className="flex flex-col items-start justify-start w-full gap-[15px]">
          <div className="flex flex-col items-center justify-start w-full gap-6">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading
                size="4xl"
                as="h1"
                className="tracking-[-0.72px] text-4xl font-extrabold"
              >
                Create Account
              </Heading>
              <Button size="sm" shape="square" className="w-[30px]">
                <Img src={lockImage} />
              </Button>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-5">
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-5">
                <Input
                  shape="round"
                  type="text"
                  name="username"
                  placeholder="username"
                  prefix={<Img src={userImage} alt="icon/24px/user" />}
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
                      onClick={handleChange}
                      src={eyeHideImage}
                      alt="icon / 20px / eye-hide"
                    />
                  }
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid cursor-pointer"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-5">
                {" "}
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="  email address"
                  prefix={<Img src={emailImage} alt="icon/24px/user" />}
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
                      onClick={handleChange}
                      src={eyeHideImage}
                      alt="icon / 20px / eye-hide"
                    />
                  }
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid cursor-pointer"
                />
              </div>
            </div>
          </div>
          <CheckBox
            shape="round"
            name="check_list"
            label="I agree to all Terms & Conditions"
            id="checklist"
            className="gap-2 text-gray-600_02 text-left font-bold"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[18px]">
          <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
            Create Account
          </Button>
          <Button
            color="white_A700"
            size="4xl"
            shape="round"
            leftIcon={<img src={googleImage} alt="icon / 20px / google" />}
            className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
          >
            Create Account with Google
          </Button>
        </div>
        <div className="h-px w-full bg-blue_gray-100_01" />
        <div className="flex flex-row md:flex-col justify-center w-full gap-2">
          <Link to="#" className="mb-px ml-[196px] md:m1-5">
            <Heading
              size="lg"
              as="h2"
              className="text-gray-600_02   text-center text-xl font-semibold"
            >
              Have an account?
            </Heading>
          </Link>
          <Link to="#" className="mr-[196px] md:mr-5">
            <Heading size="lg" as="h3" className=" text-xl font-semibold">
              <Link to="/login">Log in</Link>
            </Heading>
          </Link>
        </div>
      </div>
    </div>
  );
}
