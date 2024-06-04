import { motion } from "framer-motion";
import image1 from "../../../public/image/img_image_350x384.png";
import image2 from "../../../public/image/img_image_6.png";
import image3 from "../../../public/image/img_image_7.png";
import { fadeIn } from "../../framer_motion/variant";
import { rightArrowOrange } from "../../importImages";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { Img } from "../Img";
import { Input } from "../Input";
import { Text } from "../Text";

export default function NewsAndConsult() {
  return (
    <div className="flex flex-row justify-center w-full px-14 py-[120px] md:p-5 bg-gray-900">
      <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
        <motion.div
          variants={fadeIn("up", 0.02)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-start w-full gap-[60px]"
        >
          <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
            <Heading
              size="4xl"
              as="h2"
              className="!text-white-A700 tracking-[-0.72px] text-4xl font-extrabold"
            >
              News & Consult
            </Heading>
            <div className="flex flex-row justify-start items-center gap-2">
              <Heading
                size="md"
                as="h3"
                className="mt-0.5 !text-orange-A700 text-lg font-bold"
              >
                Explore All
              </Heading>
              <Img
                src={rightArrowOrange}
                alt="icon24pxv_seven"
                className="h-[24px] w- [24px]"
              />
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full gap-6">
            <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
              <Img
                src={image1}
                alt="image"
                className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
              />
              <Heading
                size="2xl"
                as="h4"
                className="!text-white-A700 tracking-[-0.48px] text-2xl font-bold leading-[135%]"
              >
                Looking for a New Place? Use This Time to Create Your Wishlist
              </Heading>
              <div className="flex flex-row justify-start items-center w-full gap-2">
                <Heading
                  size="md"
                  as="h6"
                  className="mt-px !text-deep_orange-400 text-lg font-bold"
                >
                  Read the Article
                </Heading>
                <Img
                  src={rightArrowOrange}
                  alt="icon24pxv_one"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
              <Img
                src={image2}
                alt="image_one"
                className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                <Heading
                  size="2xl"
                  as="h6"
                  className="!text-white-A700 tracking-[-0.48px] text-2xl font-bold leading-[135%]"
                >
                  Serie Shophouse Launch In July, Opportunity For Investors
                </Heading>
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-px !text-deep_orange-400 text-lg font-bold"
                  >
                    Read the Article
                  </Heading>
                  <Img
                    src={rightArrowOrange}
                    alt="icon24pxv_one"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
              <Img
                src={image3}
                alt="image_one"
                className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-white-A700 tracking-[-0.48px] text-2xl font-bold leading-[135%]"
                >
                  Looking for a New Place? Use This Time to Create Your Wishlist
                </Heading>
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-px !text-deep_orange-400 text-lg font-bold"
                  >
                    Read the Article
                  </Heading>
                  <Img
                    src={rightArrowOrange}
                    alt="icon24pxv_one"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.02)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-start w-full gap-[30px] p-10 sm:p-5 bg-gray-400_01 rounded-[10px]"
        >
          <div className="flex flex-col items-center justify-start w-[54%] md:w-full pt-[3px] gap-[5px]">
            <Heading
              size="3xl"
              as="h3"
              className="tracking-[-0.56px] text-center text-[28px] font-extrabold"
            >
              For Recent Update, News.
            </Heading>
            <Text
              as="p"
              className="!text-gray-900 text-center text-lg font-normal leading-[180%]"
            >
              We helps businesses customize, automate and scale up their ad
              production and delivery.
            </Text>
          </div>
          <div className="flex flex-row sm:flex-col justify-start w-[54%] md:w-full gap-2 sm:gap-5">
            <Input
              color="gray_50_02"
              size="sm"
              shape="round"
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-[78%] md:w-full sm:px-5 font-semibold px-6 rounded-[10px]"
            />
            <Button
              shape="round"
              className="sm:px-5 font-semibold min-w-[126px]"
            >
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
