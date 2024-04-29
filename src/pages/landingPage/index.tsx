import image from "../../../public/image/img_image.png";
import { Button, Heading, Text } from "../../components";
import { Img } from "../../components/Img/Img";
import LandingPageCard from "../../components/LandingPageCard";
import NewsAndConsult from "../../components/NewsAndConsult";
import SearchBar from "../../components/SearchBar";
export default function LandingPage() {
  return (
    <>
      {/* banner start */}

      <div className="flex flex-row justify-end w-full py-[80px] md:my-5 bg-yellow-50">
        <div className=" grid   grid-cols-2 md:grid-cols-1 max-w-[1300px] ">
          <div className="flex flex-col    items-center mx-auto md:px-6 w-full lg:w-full  gap-10">
            <div className="flex flex-col items-center justify-center w-full gap-[15px]">
              <Heading
                size="5x1"
                as="hl"
                className="tracking-[-0.92px] text-[46px] font-extrabold leading-[140%]"
              >
                <>
                  Find a perfect property
                  <br />
                  Where you&#39;11 love to live
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
            </div>
            <SearchBar />
            {/* <div className="flex flex-row justify-center w-full p-6 sm:p-5 bg-white-A700 rounded-[16px]">
              <Tabs
                className="flex flex-col items-center justify-start w-full gap-[38px]"
                selectedTabClassName="!text-white-A700 !bg-gray-900 "
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                <TabList className="flex flex-row justify-between w-full gap-4 p-[9px]  ">
                  <Tab className="mt-[5px]  text-white-A700 text-lg font-bold  bg-gray-500 w-full  py-2 text-center rounded-[6px]">
                    Buy
                  </Tab>
                  <Tab className="mt-[5px] md:ml-5 text-white-A700 text-lg font-bold  bg-gray-500 w-full  py-2 text-center rounded-[6px]">
                    Shell
                  </Tab>
                  <Tab className="mt-[5px] md:ml-5 text-white-A700 text-lg font-bold  bg-gray-500 w-full  py-2 text-center rounded-[6px]">
                    Rent
                  </Tab>
                </TabList>
                {[...Array(3)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="items-center w-full absolute"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-6">
                        <div className="flex flex-col items-center justify-start w-full gap-5">
                          <Input
                            shape="round"
                            name="city"
                            placeholder="City/Street"
                            suffix={
                              <Img
                                src="../../../public/image/img_icon_20px_map.svg"
                                alt="icon / 20px/map"
                              />
                            }
                            className="w-full gap-[35px] font-semibold border-blue_gray-108_01 border border-solid"
                          />
                          <Input
                            shape="round"
                            name="icon20pxupdowna"
                            placeholder="Property Type"
                            suffix={
                              <Img
                                src="../../../public/image/img_icon_20px_updown_arrow.svg"
                                alt="icon/20px/up-down arrow"
                              />
                            }
                            className="w-full gap-[35px] font-semibold border-blue_gray-108_01 border border-solid"
                          />
                          <Input
                            shape="round"
                            name="price"
                            placeholder="Price Range"
                            suffix={
                              <Img
                                src="../../../public/image/img_icon_20px_updown_arrow.svg"
                                alt="icon/20px/up-down arrow"
                              />
                            }
                            className="w-full gap-[35px] font-semibold border-blue_gray-108_01 border border-solid"
                          />
                        </div>
                        <Button
                          size="4xl"
                          shape="round"
                          className="w-full sm:px-5 font-bold"
                        >
                          <Link to={`/list`}> Search</Link>
                        </Button>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div> */}
          </div>
          <div className="flex flex-row justify-end">
            <Img
              src={image}
              alt="image_one"
              className="w-[89%] md:h-auto sm:w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* banner end */}
      {/* getStart start */}
      <div className="flex flex-row justify-center w-full my-14">
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center w-full gap-6 md:gap-5 md:px-5 max-w-[1200px]">
          <div className="flex flex-col items-start justify-center   md:h-auto gap-[49px] p-[50px] md:p-5 bg-red-100 rounded-[20px]">
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
          </div>
          <div className=" md:w-full gap-6 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
            <div className="flex flex-col items-start justify-center w-full md:h-auto gap-5 p-[30px] sm:p-5 bg-deep_orange-50 rounded-[20px]">
              <Img
                src="../../../public/image/img_search_status.svg"
                alt="image"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3x1"
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
                src="../../../public/image/img_eye.svg"
                alt="eye_one"
                className="h-[30px] w- [30px] mt-[7px]"
              />
              <Heading
                size="3x1"
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
                src="../../../public/image/img_wallet.svg"
                alt="wallet_one"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3x1"
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
                src="../../../public/image/img_emoji_happy.svg"
                alt="emojihappy_one"
                className="h-[30px] w-[30px] mt-[7px]"
              />
              <Heading
                size="3x1"
                as="h6"
                className="mb-[7px] tracking-[-0.56px] text-[28px] font-extrabold leading-[135%]"
              >
                <>
                  Enjoy your <br />
                  Appointment
                </>
              </Heading>
            </div>
          </div>
        </div>
      </div>

      {/* getStart end */}
      {/* TRANSACTION COUNT START */}
      <div className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-gray-50 my-14">
        <div className="flex flex-row justify-center w-full mx-[70px] md:mx-5 max-w-[1200px]">
          <div className=" flex flex-row md:flex-col w-full gap-[100px] md:gap-10">
            <div className="   flex flex-col items-center justify-center w-[19%] md:w-full gap-[18px]">
              <Button
                color="white_A700"
                size="3x1"
                shape="circle"
                className="w- [60px]"
              >
                <Img src="../../../public/image/img_frame.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading
                  size="5x1"
                  as="h2"
                  className="tracking-[-0.92px] text-[46px] font-extrabold"
                >
                  $15.4M
                </Heading>
                <Heading
                  size="1g"
                  as="h3"
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
                size="3x1"
                shape="circle"
                className="w-[60px]"
              >
                <Img src="../../../public/image/img_frame_orange_a700.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading
                  size="5x1"
                  as="h4"
                  className="tracking-[-0.92px] text-[46px] font-extrabold"
                >
                  25K+
                </Heading>

                <Heading
                  size="1g"
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
                size="3x1"
                shape="circle"
                className="w-[60px]"
              >
                <Img src="../../../public/image/img_icon.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                <Heading
                  size="5x1"
                  as="h6"
                  className="tracking-[-0.92px] text-[46px] font-extrabold"
                >
                  500
                </Heading>
                <Heading
                  size="1g"
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
                size="3x1"
                shape="circle"
                className="w-[60px]"
              >
                <Img src="../../../public/image/img_icon_orange_a700.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading
                  size="5x1"
                  as="hl"
                  className="tracking-[-0.92px] text-[46px] font-extrabold"
                >
                  600+
                </Heading>
                <Heading
                  size="1g"
                  as="h5"
                  className="!text-blue_gray-600 tracking-[-0.40px] text-xl font-semibold"
                >
                  Reagular Clients
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TRANSACTION COUNT START END */}
      {/* FEATURE PROPERTIES START   */}
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-center justify-start h-[1200px] w-full md:h-auto gap-[53px] md:px-5 max-w-[1200px]">
          <div className="flex flex-row justify-center w-full pt-[5px]">
            <div className="flex flex-col items-center justify-start w-full gap-[17px]">
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
                    className="mt-0.5 !text-orange-A700 text-1g font-bold"
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
              {/* <div className="flex flex-row md:flex-col justify-start w-full md:gap-5">
                  <Button
                    size="xs"
                    shape="square"
                    className="text-gray-400 font-bold min-w-[159px]"
                  >
                    Resident Property
                  </Button>
                  <Button
                    size="xs"
                    shape="square"
                    className="ml-[143px] md:ml-5 text-gray-400 font-bold min-w-[186px]"
                  >
                    Commercial Property
                  </Button>
                  <Button
                    size="xs"
                    shape="square"
                    className="ml-[116px] md:ml-5 text-gray-400 font-bold min-w-[164px]"
                  >
                    Industrial Property
                  </Button>
                  <Button
                    size="xs"
                    shape="square"
                    className="ml-[137px] md:ml-5 text-gray-400 font-bold min-w-[180px]"
                  >
                    Agriculture Property
                  </Button>
                </div> */}
            </div>
          </div>

          <div className=" grid justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 ">
            <LandingPageCard
              imageOne="../../../public/image/img_image_1.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <LandingPageCard
              imageOne="../../../public/image/img_image_2.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <LandingPageCard
              imageOne="../../../public/image/img_image_3.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <LandingPageCard
              imageOne="../../../public/image/img_image_4.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <LandingPageCard
              imageOne="i../../../public/image/img_image_5.png"
              className="flex flex-col items-center justify-start w-full"
            />
            <LandingPageCard
              imageOne="../../../public/image/img_image_1.png"
              className="flex flex-col items-center justify-start w-full"
            />
          </div>
        </div>
      </div>

      {/* FEATURE PROPERTIES   END */}
      {/* DREAM APPOINTMENT START   */}
      <div className="flex flex-col items-center justify-center w-full px-14 py-[120px] md:p-5 bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[150px] max-w-[1200px]">
          {" "}
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[58px]">
              <div className="flex flex-col items-center justify-start gap-[19px]">
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
              </div>
              <Button
                shape="round"
                className="sm:px-5 font-semibold min-w-[138px] sm:min-w-full"
              >
                Get Started
              </Button>
            </div>
            <div className="flex flex-row sm:flex-col justify-start w-[47%] md:w-full gap-5 sm:gap-5">
              <div className="flex flex-col items-center justify-start w- [49%] sm:w-full gap-4">
                <Img
                  src="../../../public/image/img_rectangle_18.png"
                  alt="image_two"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="../../../public/image/img_rectangle_21.png"
                  alt="image_three"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start w- [49%] sm:w-full gap-4">
                <Img
                  src="../../../public/image/img_rectangle_19.png"
                  alt="image_four"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="../../../public/image/img_rectangle_20.png"
                  alt="image_five"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <Img
              src="../../../public/image/img_rectangle_20_589x521.png"
              alt="image_six"
              className="w-[44%] md:w-full md:h- [589px] object-cover rounded-[10px]"
            />
            <div className="flex flex-col items-start justify-start w-[44%] md:w-full gap-[60px]">
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
                    className="!text-gray-700 text-1g font-normal leading-[180%]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-3">
                  <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5 sm:gap-3.5">
                    <Img
                      src="../../../public/image/img_icon_check.svg"
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
                      src="../../../public/image/img_icon_check.svg"
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
                      src="../../../public/image/img_icon_check.svg"
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
            </div>
          </div>
        </div>
      </div>
      {/* dream Appointment End */}
      {/* Review start */}
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full md:px-5 max-w-[1010px]">
            <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
              <Img
                src="../../../public/image/img_rectangle_5591.png"
                alt="image_seven"
                className="w-[46%] md:w-full md:h-[344px] object-cover rounded-1g"
              />
              <div className="flex flex-row justify-center w-[46%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Heading
                        size="3x1"
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
                      src="../../../public/image/img_shape.svg"
                      alt="shape_one"
                      className="h-[51px]"
                    />
                  </div>
                  <Heading
                    size="2x1"
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
              src="../../../public/image/img_icon_24px_v_gray_600.svg"
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
              src="../../../public/image/img_icon_24px_v.svg"
              alt="icon24pxv_five"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
      </div>
      {/* Review end */}
      {/* News & Consult start*/}
      <NewsAndConsult />
      {/* News & Consult end */}
    </>
  );
}
