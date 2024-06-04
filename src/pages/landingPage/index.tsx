import happyEmoji from "../../../public/image/img_emoji_happy.svg";
import eyeImage from "../../../public/image/img_eye.svg";
import image from "../../../public/image/img_image.png";
import image2 from "../../../public/image/img_image_1.png";
import image3 from "../../../public/image/img_rectangle_18.png";
import image5 from "../../../public/image/img_rectangle_19.png";
import image6 from "../../../public/image/img_rectangle_20.png";
import image7 from "../../../public/image/img_rectangle_20_589x521.png";
import image4 from "../../../public/image/img_rectangle_21.png";
import ractangleImage from "../../../public/image/img_rectangle_5591.png";

import { motion } from "framer-motion";
import statusSearchImage from "../../../public/image/img_search_status.svg";
import walletImage from "../../../public/image/img_wallet.svg";
import { Button, Heading, Text } from "../../components";
import { Img } from "../../components/Img";
import NewsAndConsult from "../../components/NewsAndConsult";
import LandingPageCard from "../../components/PropertyCard";
import SearchBar from "../../components/SearchBar";
import SummaryOfClient from "../../components/SummarayOfClinet";
import { fadeIn } from "../../framer_motion/variant";
import {
  checkImage,
  leftArrowImage,
  rightArrowOrange,
  shapeImage,
} from "../../importImages";
export default function LandingPage() {
  const lists = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col gap-14  ">
      {/* banner start */}

      <div className="flex flex-row justify-end w-full py-[80px] md:my-5 bg-yellow-50">
        <div className=" grid   grid-cols-2 md:grid-cols-1 max-w-[1300px] ">
          <div className="flex flex-col    items-center   md:px-6 w-full lg:w-full  gap-10">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center   gap-[15px]"
            >
              <Heading
                size="5xl"
                as="h1"
                className="tracking-[-0.92px] text-[46px] font-extrabold leading-[140%]"
              >
                <>
                  Find a perfect property
                  <br />
                  Where you&#39;ll love to live
                </>
              </Heading>
              <Text
                size="lg"
                as="p"
                className="!text-gray-700 text-xl font-normal leading-[180%]"
              >
                We helps businesses customize, automate and scale up their ad
                PROPERTIESion and delivery.
              </Text>
            </motion.div>
            <SearchBar />
          </div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-row justify-end"
          >
            <Img
              src={image}
              alt="image_one"
              className="w-[89%] md:h-auto sm:w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* banner end */}
      {/* getStart start */}
      <div className="flex flex-row justify-center w-full ">
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-center   md:h-auto gap-[49px] p-[50px] md:p-5 bg-red-100 rounded-[20px]"
          >
            <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
              <Heading
                size="4xl"
                as="h2"
                className="tracking-[-0.72px] text-4xl font-extrabold leading-[140%]"
              >
                Simple & easy way to find your dream Appointment
              </Heading>
              <Text
                as="p"
                className="!text-gray-900 text-lg font-normal leading-[180%]"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Text>
            </div>
            <Button
              shape="round"
              className="mb-[23px] sm:px-5 font-semibold min-w-[138px] sm:min-w-full"
            >
              Get Started
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            className=" md:w-full gap-6 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid"
          >
            <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
              <Img
                src={statusSearchImage}
                alt="image"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3xl"
                as="h3"
                className="mb-[7px] tracking-[-0.56px] text-[28px] font-extrabold leading-[135%]"
              >
                <>
                  Search <br />
                  your location
                </>
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
              <Img
                src={eyeImage}
                alt="eye_one"
                className="h-[30px] w- [30px] mt-[7px]"
              />
              <Heading
                size="3xl"
                as="h4"
                className="mb-[7px] tracking-[-0.56px] text-[28px] font-extrabold leading-[135%]"
              >
                <>
                  Visit <br />
                  Appointment
                </>
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
              <Img
                src={walletImage}
                alt="wallet_one"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3xl"
                as="h5"
                className="mb-[7px] tracking-[-0.56px] text-[28px] font-extrabold leading-[135%]"
              >
                <>
                  Get your <br />
                  dream house
                </>
              </Heading>
            </div>
            <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
              <Img
                src={happyEmoji}
                alt="emojihappy_one"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3xl"
                as="h6"
                className="mb-[7px] tracking-[-0.56px] text-[28px] font-extrabold leading-[135%]"
              >
                <>
                  Enjoy your <br />
                  Appointment
                </>
              </Heading>
            </div>
          </motion.div>
        </div>
      </div>

      {/* getStart end */}
      {/* TRANSACTION COUNT START */}
      <motion.div
        variants={fadeIn("up", 0.02)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-gray-50  "
      >
        <SummaryOfClient />
      </motion.div>
      {/* TRANSACTION COUNT START END */}
      {/* FEATURE PROPERTIES START   */}
      <motion.div
        variants={fadeIn("up", 0.02)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex flex-row justify-center w-full"
      >
        <div className="flex flex-col items-center justify-start   w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
          <div className="flex flex-row justify-center w-full pt-[5px]">
            <div className="flex flex-col items-center justify-start w-full gap-14">
              <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                <Heading
                  size="4xl"
                  as="h2"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  Featured Properties
                </Heading>
                <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
                  <Heading
                    size="md"
                    as="h3"
                    className="mt-0.5 !text-orange-A700 text-lg font-bold"
                  >
                    Explore All
                  </Heading>
                  <Img
                    src="../../../public/image/img_icon_24px_v.svg"
                    alt="icon24pxv_one"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between w-full md:gap-5 ">
                <Button
                  size="xs"
                  shape="square"
                  className="text-gray-400 font-bold min-w-[159px] p-4"
                >
                  Resident Property
                </Button>
                <Button
                  size="xs"
                  shape="square"
                  className="text-gray-400 font-bold min-w-[159px] p-4"
                >
                  Commercial Property
                </Button>
                <Button
                  size="xs"
                  shape="square"
                  className="text-gray-400 font-bold min-w-[159px] p-4"
                >
                  Industrial Property
                </Button>
                <Button
                  size="xs"
                  shape="square"
                  className="text-gray-400 font-bold min-w-[159px] p-4"
                >
                  Agriculture Property
                </Button>
              </div>
            </div>
          </div>

          <div className=" grid justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 ">
            {lists.map((list) => (
              <LandingPageCard
                key={list}
                imageOne={image2}
                className="bg-gradient-to-br from-slate-100 to-gray-100 border rounded-[10px] p-4 "
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* FEATURE PROPERTIES   END */}
      {/* DREAM APPOINTMENT START   */}
      <div className="flex flex-col items-center justify-center w-full px-14  py-10 md:p-5 bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
          {" "}
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[58px]">
              <motion.div
                variants={fadeIn("right", 0.02)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-start gap-[19px]"
              >
                <Heading
                  size="4xl"
                  as="h2"
                  className="tracking-[-0.72px] text-4xl font-extrabold leading-[140%]"
                >
                  Simple & easy way to find your dream Appointment
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-700 text-lg font-normal leading-[180%]"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, when our power of choice
                  is untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed.
                </Text>
              </motion.div>
              <Button
                shape="round"
                className="sm:px-5 font-semibold min-w-[138px] sm:min-w-full"
              >
                Get Started
              </Button>
            </div>
            <motion.div
              variants={fadeIn("left", 0.02)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-row sm:flex-col justify-start w-[47%] md:w-full gap-5 sm:gap-5"
            >
              <div className="flex flex-col items-center justify-start w- [49%] sm:w-full gap-4">
                <Img
                  src={image3}
                  alt="image_two"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src={image4}
                  alt="image_three"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start w- [49%] sm:w-full gap-4">
                <Img
                  src={image5}
                  alt="image_four"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src={image6}
                  alt="image_five"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <motion.div
              variants={fadeIn("right", 0.02)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="w-[44%] md:w-full md:h- [589px] object-cover rounded-[10px]"
            >
              <Img src={image7} alt="image_six" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.02)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex flex-col items-start justify-start w-[44%] md:w-full gap-[60px]"
            >
              {" "}
              <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                  <Heading
                    size="4xl"
                    as="h3"
                    className="tracking-[-0.72px] text-4xl font-extrabold leading-[140%]"
                  >
                    Best rated host on popular rental sites
                  </Heading>
                  <Text
                    as="p"
                    className="!text-gray-700 text-lg font-normal leading-[180%]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-3">
                  <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5 sm:gap-3.5">
                    <Img
                      src={checkImage}
                      alt="iconcheck_one"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading
                      size="md"
                      as="h4"
                      className="text-lg font-semibold"
                    >
                      Find excellent deals
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                    <Img
                      src={checkImage}
                      alt="iconcheck_three"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading
                      size="md"
                      as="h5"
                      className="mt-[5px] text-lg font-semibold"
                    >
                      Friendly host & Fast support
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-3.5 sm:gap-3.5">
                    <Img
                      src={checkImage}
                      alt="iconcheck_five"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading
                      size="md"
                      as="h6"
                      className="mt-[5px] text-lg font-semibold"
                    >
                      Secure payment system
                    </Heading>
                  </div>
                </div>
              </div>
              <Button
                shape="round"
                className="sm:px-5 font-semibold min-w-[134px] sm:min-w-full"
              >
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* dream Appointment End */}
      {/* Review start */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center w-full gap-6  "
      >
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full md:px-5 max-w-[1010px]">
            <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
              <Img
                src={ractangleImage}
                alt="image_seven"
                className="w-[46%] md:w-full md:h-[344px] object-cover rounded-lg"
              />
              <div className="flex flex-row justify-center w-[46%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Heading
                        size="3xl"
                        as="h2"
                        className="mt-0.5 tracking-[-0.56px] text-[28px] font-extrabold"
                      >
                        Taylor Wilson
                      </Heading>
                      <Heading
                        size="md"
                        as="h3"
                        className="text-lg font-semibold"
                      >
                        Product Manager Static Mania
                      </Heading>
                    </div>
                    <Img
                      src={shapeImage}
                      alt="shape_one"
                      className="h-[51px]"
                    />
                  </div>
                  <Heading
                    size="2xl"
                    as="h4"
                    className="!text-gray-700 text-2xl font-semibold leading-[165%]"
                  >
                    Eget eu massa et consectetur. Mauris donec. Leo a, id sed
                    duis proin sodales. Turpis viverra diam porttitor mattis
                    morbi ac amet. Euismod commodo. We get you customer
                    relationships that last.{" "}
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end   w-full pl-14 pr-[200px] gap-[30px] md:gap-10 md:px-5">
          <div className="flex flex-row  items-center   gap-2">
            <Img
              src={leftArrowImage}
              alt="icon24pxv_three"
              className="h-[24px] w-[24px]"
            />
            <Heading
              size="md"
              as="h2"
              className="!text-gray-600 text-lg font-bold"
            >
              Previews
            </Heading>
          </div>
          <div className="flex flex-row  items-center   gap-2">
            <Heading
              size="md"
              as="h3"
              className="mt-px text-orange-A700 text-lg font-bold"
            >
              Next
            </Heading>
            <Img
              src={rightArrowOrange}
              alt="icon24pxv_five"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </motion.div>
      {/* Review end */}
      {/* News & Consult start*/}
      <NewsAndConsult />
      {/* News & Consult end */}
    </div>
  );
}
