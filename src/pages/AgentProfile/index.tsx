import { Link } from "react-router-dom";
import coverImage from "../../../public/image/img_cover_image.png";

import image1 from "../../../public/image/img_ellipse_2695.png";
import image2 from "../../../public/image/img_image_1.png";
import rantangleImage from "../../../public/image/img_rectangle_5599_150x150.png";
import { Button, Heading, Img, Text } from "../../components";
import LandingPageCard from "../../components/LandingPageCard";

import RatingComponent from "../../components/Rating";
import {
  emailImage,
  facebookImage,
  linkdinImage,
  phoneImage,
  plusImage,
  rightArrowNormal,
  rssImage,
  thinRightArrow,
  twitterImage,
} from "../../importImages";
export default function AgentProfile() {
  const reviews = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01 py-14">
      <div className="flex flex-col items-center justify-start w-full ">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-full">
              <Img
                src={coverImage}
                alt="coverimage_one"
                className="w-full md:h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[-46px] gap-[58px]">
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5 md:px-5 max-w-[1160px]">
                <Img
                  src={rantangleImage}
                  alt="image"
                  className="w-[150px] md:h-auto object-cover rounded-[10px]"
                />
                <div className="flex flex-row md:flex-col mt-12 justify-between items-center w-[85%] md:w-full md:gap-10">
                  <div className="flex flex-row md:flex-col justify-start items-center w-[83%] md:w-full gap-8 md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-1.5">
                      <Heading
                        size="2xl"
                        as="h1"
                        className="tracking-[-0.48px] text-2xl font-bold"
                      >
                        Bruno Fernandes
                      </Heading>
                      <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                        <RatingComponent initialRating={2} />
                        <Heading as="h2" className="text-base font-semibold">
                          4.5 review
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-2">
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img
                          src={phoneImage}
                          alt="icon24pxcall"
                          className="h-[24px] w- [24px]"
                        />
                        <Heading
                          size="md"
                          as="h3"
                          className="text-lg font-semibold"
                        >
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img
                          src={emailImage}
                          alt="icon24pxemail"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading
                          size="md"
                          as="h4"
                          className="mt-0.5 text-lg font-semibold"
                        >
                          bruno@relasto.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    className="sm:px-5 font-semibold min-w-[112px]"
                  >
                    Contact
                  </Button>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full gap-12 md:px-5 max-w-[1200px]">
                  <div className="flex flex-row md:flex-col justify-start w-full gap-3 md:gap-5">
                    <Button
                      size="lg"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[291px]"
                    >
                      For rent
                    </Button>
                    <Button
                      color="gray_600_02"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[291px]"
                    >
                      For sale
                    </Button>
                    <Button
                      color="gray_600_02"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[291px]"
                    >
                      About
                    </Button>
                    <Button
                      color="gray_600_02"
                      size="lg"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[291px]"
                    >
                      Review
                    </Button>
                  </div>
                  <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />

                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />
                    <LandingPageCard
                      imageOne={image2}
                      className="flex flex-col items-center justify-start w-full"
                    />
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                    <div className="flex flex-row justify-start gap-[5px]">
                      <Button
                        color="gray_700"
                        variant="outline"
                        shape="round"
                        className="font-semibold min-w-[48px]"
                      >
                        1
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        shape="round"
                        className="font-semibold min-w-[48px]"
                      >
                        2
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        shape="round"
                        className="font-semibold min-w-[48px]"
                      >
                        3
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        shape="round"
                        className="font-semibold min-w-[48px]"
                      >
                        4
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        variant="outline"
                        shape="round"
                        className="font-semibold min-w-[48px]"
                      >
                        5
                      </Button>
                    </div>
                    <Button
                      color="blue_gray_100_02"
                      variant="outline"
                      shape="round"
                      rightIcon={
                        <Img
                          src={rightArrowNormal}
                          alt="icon / 16px / arrow right"
                        />
                      }
                      className="gap-1 font-semibold min-w-[134px]"
                    >
                      Next Page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* agent profile start */}
        <div className="flex flex-row md:flex-col justify-between items-start w-full p-[41px] md:gap-10 md:p-5 border-blue_gray-100_01 md:border-0 lg:border border-solid bg-white-A700 max-w-[1200px] md:rounded-[10px] mt-10 ">
          <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-[57px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[30px] sm:gap-5">
                <Img
                  src={image1}
                  alt="image_one"
                  className="w-[182px] md:h-auto object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start justify-start w-[60%] sm:w-full gap-1.5">
                  <Heading
                    size="2xl"
                    as="h2"
                    className="tracking-[-0.48px] text-2xl font-bold"
                  >
                    Bruno Fernandes
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                    <Heading as="h3" className="text-base font-semibold">
                      4.5 review
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[13px] py-0.5">
                    <Img
                      src={phoneImage}
                      alt="icon24pxcall"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading
                      size="md"
                      as="h4"
                      className="text-lg font-semibold"
                    >
                      (123) 456-7890
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-3 py-0.5">
                    <Img
                      src={emailImage}
                      alt="icon24pxemail"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading className="mt-0.5 text-lg font-semibold">
                      bruno@relasto.com
                    </Heading>
                  </div>
                </div>
              </div>
              <Text as="p" className="text-lg font-normal leading-[180%]">
                <>
                  A slider is great way to display a slideshow featuring or
                  videos, usually on your homepage.Adding sliders to your site
                  is no longer difficult. You don't have to know coding anymore.
                  Just use a slider widget and it will automatically insert the
                  slider on your web page.
                  <br />
                  One of the best ways to add beautiful sliders with excellent
                  responsiveness and advanced options.{" "}
                </>
              </Text>
            </div>
            <Button shape="round" className="w-full sm:px-5 font-semibold">
              Contact
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-6">
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Heading
                size="lg"
                as="h2"
                className="mt-0.5 tracking-[-0.40px] text-xl font-semibold"
              >
                Experiences
              </Heading>
              <Heading
                size="md"
                as="h3"
                className="! text-gray-600_02 text-lg font-semibold"
              >
                15+ years experience
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Heading
                size="lg"
                as="h4"
                className="mt-0.5 tracking-[-0.40px] text-xl font-semibold"
              >
                Property Types
              </Heading>
              <Heading
                size="md"
                as="h5"
                className="text-gray-600 02 text-lg font-semibold"
              >
                Private House, Villa, Townhouse, Apartment
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Heading
                size="lg"
                as="h6"
                className="tracking-[-0.40px] text-xl font-semibold"
              >
                Area
              </Heading>
              <Heading
                size="md"
                as="h6"
                className="mb-px text-lg font-semibold"
              >
                California, San Jose, Miami
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Heading
                size="lg"
                as="h5"
                className="tracking-[-0.40px] text-xl font-semibold"
              >
                Address
              </Heading>
              <Heading
                size="md"
                as="h6"
                className="mb-px !text-gray-600_02 text-lg font-semibold"
              >
                {" "}
                59 Orchard, NY 5005, US
              </Heading>
            </div>
            <div className="flex flex-row sm:flex-col justify-between w-full gap-[60px] sm:gap-10">
              <div className="flex flex-col items-start justify-center gap-[7px]">
                <Heading
                  size="lg"
                  as="h5"
                  className="tracking-[-0.40px] text-xl font-semibold"
                >
                  License No
                </Heading>
                <Heading
                  size="md"
                  as="h6"
                  className="mb-0.5 !text-gray-600_02 text-lg font-semibold"
                >
                  BF-0535
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center gap-[7px]">
                Website
                <Heading
                  size="lg"
                  as="h5"
                  className="tracking-[-0.40px] text-xl font-semibold"
                ></Heading>
                <Link to="#" target="_blank" rel="noreferrer" className="mb-px">
                  <Heading
                    size="md"
                    as="h6"
                    className="!text-gray-600_02 text-lg font-semibold underline"
                  >
                    www.abc.com
                  </Heading>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <Heading
                size="lg"
                as="h5"
                className="tracking-[-0.40px] text-xl font-semibold"
              >
                Social
              </Heading>
              <div className="flex flex-row justify-start gap-4">
                <Img
                  src={facebookImage}
                  alt="socialicon_one"
                  className="h-[30px] w-[30px]"
                />{" "}
                <Img
                  src={linkdinImage}
                  alt="socialicon"
                  className="h-[30px] w-[30px]"
                />
                <Img
                  src={twitterImage}
                  alt="socialicon_five"
                  className="h-[30px] w-[30px]"
                />
                <Img
                  src={twitterImage}
                  alt="socialicon"
                  className="h-[30px] w-[30px]"
                />
                <Img
                  src={rssImage}
                  alt="socialiconrss"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* agent profile end */}
        {/* client review start*/}
        <div className="flex flex-col   items-start justify-center  w-full gap-[29px] mx-6 md:px-5 sm:p-5  border-blue_gray-100_01  border border-solid   bg-white-A700 max-w-[1200px] rounded-sm   mt-10 ">
          <div className="flex flex-col items-center justify-center w-full py-4 gap-[22px]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-full px-[42px] md:px-5 sm:gap-10">
              <Heading
                size="3xl"
                as="h2"
                className="tracking-[-0.56px] text-[28px] font-extrabold"
              >
                Clients Review
              </Heading>
              <Button
                size="4xl"
                shape="round"
                rightIcon={<Img src={plusImage} alt="icon/24px / plus" />}
                className="gap-2.5 font-bold min-w-[190px]"
              >
                Write a Reveiw
              </Button>
            </div>
            <div className="h-px w-full bg-blue_gray-100_01" />
          </div>
          {/* reviewCard */}
          <div className="flex flex-col items-start justify-start w-full gap-[25px] px-[25px] sm:px-5 mb-10">
            {reviews.map((review) => (
              <div className="flex flex-col w-full gap-[25px]" key={review}>
                <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                  <Heading
                    size="2xl"
                    as="h2"
                    className="mt-[9px] !text-gray-600_02 text-2xl font-semibold leading-[165%]"
                  >
                    Eget eu massa et consectetur. Mauris donec. Leo a, id sed
                    duis proin sodales. Turpis viverra diam porttitor mattis
                    morbi ac amet. Euismod commodo. We get you customer
                    relationships that last.{" "}
                  </Heading>
                  <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                    <div className="flex flex-row justify-start w-full gap-[50px]">
                      <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                        <RatingComponent initialRating={2} />

                        <Heading
                          size="lg"
                          as="h3"
                          className="Itext-gray-600_02 tracking-[-0.40px] text-xl font-semibold"
                        >
                          4.5 review
                        </Heading>
                      </div>
                      <Heading
                        size="lg"
                        as="h4"
                        className="text-gray-600_02 tracking-[-0.40px] text-xl font-semibold"
                      >
                        02 June 2022
                      </Heading>
                    </div>
                    <div className="flex flex-row md:flex-col justify-start items-center w-full gap-4 md:gap-5">
                      <Img
                        src={image1}
                        alt="taylor_wilson"
                        className="h-[80px] w-[80px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-center w-[92%] md:w-full gap-[5px]">
                        {" "}
                        <Heading
                          size="3xl"
                          as="h5"
                          className="mt-0.5 tracking-[-0.56px] text-[28px] font-extrabold"
                        >
                          Taylor Wilson
                        </Heading>
                        <Heading
                          size="md"
                          as="h6"
                          className="text-lg font-semibold"
                        >
                          Product Manager Static Mania
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button
              color="gray_600_02"
              variant="outline"
              shape="round"
              rightIcon={<Img src={thinRightArrow} />}
              className="gap-1 font-semibold min-w-[120px]    mb-6 sm:min-w-full"
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
