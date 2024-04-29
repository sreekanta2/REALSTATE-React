import { Button, Heading, Img, Input, Text } from "../../components";
import { TextArea } from "../../components/TextArea";

export default function ContactPagePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-8.5 gap-[15px]">
                <Heading
                  size="6x1"
                  as="hl"
                  className="tracking-[-1.88px] text-center text-[54px] font-extrabold"
                >
                  Get in touch
                </Heading>
                <Text
                  as="p"
                  className="text-center text-ig font-normal leading-[180%]"
                >
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-18 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading
                      size="3xl"
                      as="h2"
                      className="  text-[28px] font-extrabold"
                    >
                      Send a message
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        shape="round"
                        type="text"
                        name="message"
                        placeholder="Full Name"
                        prefix={
                          <Img
                            src="../../../public/image/img_icon_24px_user.svg"
                            alt="icon/24px/user"
                          />
                        }
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        prefix={
                          <img
                            src="../../../public/image/img_icon_24px_email.svg"
                            alt="icon/24px/ email"
                          />
                        }
                        className="w-full gap-3.5 font-semibold border-blue gray-100 01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        prefix={
                          <img
                            src="../../../public/image/img_icon_20px_call.svg"
                            alt="icon/24px/call"
                          />
                        }
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button
                    size="2xl"
                    shape="round"
                    className="w-full sm:px-5 mt-10 font-semibold"
                  >
                    Send Request
                  </Button>
                </div>
                <div className="h-[534px]  md:w-full md:h-px my-[25px] bg-blue_gray-108_81" />
                <div className="flex-flex-col items-center justify-start  w-[46%] md:w-full gap-10">
                  <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-10">
                    <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-4">
                      <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                        <Heading
                          size="lg"
                          as="h3"
                          className="tracking-[-0.48px] text-xl font-semibold"
                        >
                          Office Address
                        </Heading>
                        <Heading
                          size="md"
                          as="h4"
                          className="text-gray-600_02 text-1g font-semibold leading-[180%]"
                        >
                          <>
                            1421 San Pedro St, Los Angeles, <br />
                            CA 90015
                          </>
                        </Heading>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-2.5">
                        <div className="flex flex-row justify-start items-center < w-full gap-[13px] py-0.5">
                          <Img
                            src="../../../public/image/img_icon_20px_call.svg"
                            alt="icon24pxcall"
                            className="h-[24px] w-[24px]"
                          />
                          <Heading
                            size="md"
                            as="h5"
                            className="text-gray-600_02 text-lg font-semibold"
                          >
                            (123) 456-7890
                          </Heading>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-3 ру-0.5">
                          <Img
                            src="../../../public/image/img_icon_24px_email.svg"
                            alt="icon24pxemail"
                            className="h-[24px] w-[24px]"
                          />
                          <Heading
                            size="md"
                            as="h6"
                            className="mt-0.5 !text-gray-600_02 text-1g font-semibold"
                          >
                            info@mail.com
                          </Heading>
                        </div>
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
                          src="../../../public/image/img_social_icon_facebook.svg"
                          alt="socialicon_one"
                          className="h-[30px] w-[30px]"
                        />
                        <Img
                          src="../../../public/image/img_social_icon_linkedin.svg"
                          alt="socialicon"
                          className="h-[30px] w-[38px]"
                        />
                        <Img
                          src="../../../public/image/img_social_icon_twitter.svg"
                          alt="socialicon_five"
                          className="h-[30px] w-[30px]"
                        />
                        <Img
                          src="../../../public/image/img_social_icon_youtube.svg"
                          alt="socialicon"
                          className="h-[30px] w-[30px]"
                        />
                        <Img
                          src="../../../public/image/img_social_icon_rss.svg"
                          alt="socialiconrss"
                          className="h-[30px] w-[30px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
