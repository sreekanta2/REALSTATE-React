import { Link } from "react-router-dom";
import facebook from "../../../public/image/img_icon_facebook.svg";
import instagram from "../../../public/image/img_icon_instragram.svg";
import linkdin from "../../../public/image/img_icon_linked_in.svg";
import twitter from "../../../public/image/img_icon_twitter.svg";
import youtube from "../../../public/image/img_icon_youtube.svg";
import image1 from "../../../public/image/img_real_estate_1.svg";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Text } from "../Text";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full px-14 py-[74px] md:p-5 bg-white-A700">
      <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
        <div className="flex flex-row md:flex-col justify-start items-center w-full gap-px md:gap-5">
          <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
            <div className="flex flex-row justify-start items-start w-full gap-[11px]">
              <Img
                src={image1}
                alt="realestateone"
                className="h-[40px] w-[40px]"
              />
              <Text
                size="lg"
                as="p"
                className="mt-[5px] !text-orange-A700!font-markoone text-xl font-normal"
              >
                Relasto
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-7">
              <Heading
                as="h6"
                className="text-base font-semibold leading-[160%]"
              >
                <>
                  59 Bervely Hill Ave, Brooklyn Town,
                  <br />
                  New York, NY 5630, CA, US
                </>
              </Heading>
              <div className="flex flex-col items-start justify-center gap-2">
                <Heading as="h6" className="mt-px text-base font-semibold">
                  +(123) 456-7890
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  info@mail.com
                </Heading>
              </div>
              <div className="flex flex-row justify-start w-full gap-3">
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <Img
                    src={facebook}
                    alt="iconfacebook"
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <Img
                    src={twitter}
                    alt="icontwitter_one"
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <Img
                  src={instagram}
                  alt="iconinstragram"
                  className="h-[30px] w-[30px]"
                />
                <Img
                  src={linkdin}
                  alt="iconlinkedin"
                  className="h-[30px] w-[30px]"
                />
                <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                  <Img
                    src={youtube}
                    alt="iconyoutube_one"
                    className="h-[30px] w-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between  w-[72%] md:w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <Heading size="md" as="h6" className="text-lg font-bold">
                Features
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                <Heading as="h6" className="text-base font-semibold">
                  Home v1
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Home v2
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  About
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Contact
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Search
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              {" "}
              <Heading size="md" as="h6" className="text-lg font-bold">
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
                <Heading as="h6" className="text-base font-semibold">
                  Listing v1
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Listing v2
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Property Details
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Agent List
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Agent Profile
                </Heading>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <Heading size="md" as="h6" className="text-lg font-bold">
                Documentation
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                <Link to="#" className="mt-0.5">
                  <Heading as="h6" className="text-base font-semibold">
                    Blog
                  </Heading>
                </Link>
                <Heading as="h6" className="text-base font-semibold">
                  FAQ
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  Privacy Policy
                </Heading>
                <Link to="#">
                  <Heading as="h6" className="text-base font-semibold">
                    License
                  </Heading>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
              <Heading size="md" as="h6" className="text-lg font-bold">
                Others
              </Heading>
              <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                <Link to="#" className="mt-0.5">
                  <Heading as="h6" className="text-base font-semibold">
                    Log in
                  </Heading>
                </Link>
                <Heading as="h6" className="text-base font-semibold">
                  Enter OTP
                </Heading>
                <Heading as="h6" className="text-base font-semibold">
                  New Password
                </Heading>
                <Link to="#">
                  <Heading as="h6" className="text-base font-semibold">
                    Reset Password
                  </Heading>
                </Link>
                <Link to="#">
                  <Heading as="h6" className="text-base font-semibold">
                    Create Account
                  </Heading>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Heading as="h6" className="text-base font-semibold">
          © 2022. All rights reserved.
        </Heading>
      </div>
    </footer>
  );
}
