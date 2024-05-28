import { Button, Heading, Img, Text } from "../../components";
import NewsAndConsult from "../../components/NewsAndConsult";
import TeamCard from "../../components/TeamCard";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] mt-[60px]">
        {/* banner start */}
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[38px] md:px-5 max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-4">
              <Heading
                size="6xl"
                as="h1"
                className="tracking-[-1.08px] text-center text-[54px] font-extrabold leading-[140%]"
              >
                <>
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </>
              </Heading>
              <Text
                as="p"
                className="!text-gray-700 text-center text-lg font-normal leading-[180%]"
              >
                <>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who <br />
                  are so beguiled and demoralized by the charms of pleasure of
                  the moment, <br /> so blinded by desire, that they cannot
                  foresee the pain and trouble.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                <Img
                  src="../../../public/image/img_rectangle_5592.png"
                  alt="image"
                  className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="../../../public/image/img_rectangle_5593.png"
                  alt="image_one"
                  className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                <Img
                  src="../../../public/image/img_rectangle_5595.png"
                  alt="image_two"
                  className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="../../../public/image/img_rectangle_5594.png"
                  alt="image_three"
                  className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* TRANSACTION COUNT START */}
        <div className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-gray-50">
          <div className="flex flex-row justify-center w-full mx-[70px] md:mx-5 max-w-[1200px]">
            <div className=" flex flex-row md:flex-col w-full gap-[100px] md:gap-10">
              <div className="   flex flex-col items-center justify-center w-[19%] md:w-full gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w- [60px]"
                >
                  <Img src="../../../public/image/img_frame.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading
                    size="5xl"
                    as="h2"
                    className="tracking-[-0.92px] text-[46px] font-extrabold"
                  >
                    $15.4M
                  </Heading>
                  <Heading
                    size="lg"
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
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="../../../public/image/img_frame_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading
                    size="5xl"
                    as="h4"
                    className="tracking-[-0.92px] text-[46px] font-extrabold"
                  >
                    25K+
                  </Heading>

                  <Heading
                    size="lg"
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
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="../../../public/image/img_icon.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading
                    size="5xl"
                    as="h6"
                    className="tracking-[-0.92px] text-[46px] font-extrabold"
                  >
                    500
                  </Heading>
                  <Heading
                    size="lg"
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
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="../../../public/image/img_icon_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading
                    size="5xl"
                    as="h1"
                    className="tracking-[-0.92px] text-[46px] font-extrabold"
                  >
                    600+
                  </Heading>
                  <Heading
                    size="lg"
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

        {/* Founders start */}
        <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1147px]">
            <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-14">
              <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                <Heading
                  size="4xl"
                  as="h2"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  A note from our founders.
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-700 text-lg font-normal leading-[180%]"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour,
                </Text>
              </div>
              <div className="flex flex-col w-full gap-[30px]">
                <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                    <Heading
                      size="lg"
                      as="h3"
                      className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center text-xl font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                    >
                      1
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                    <Heading
                      size="xl"
                      as="h4"
                      className="tracking-[-0.44px] text-[22px] font-bold"
                    >
                      It all started in 1995
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-700 text-lg font-normal leading-[180%]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center text-xl font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                    >
                      2
                    </Heading>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                    <Heading
                      size="xl"
                      as="h6"
                      className="tracking-[-0.44px] text-[22px] font-bold"
                    >
                      Donate launches in 2007
                    </Heading>
                    <Text
                      as="p"
                      className="!text-gray-700 text-lg font-normal leading-[180%]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                  <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center text-xl font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                    >
                      3
                    </Heading>
                  </div>

                  <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                    <Heading
                      size="xl"
                      as="h5"
                      className="tracking-[-0.44px] text-[22px] font-bold"
                    >
                      Relasto holds its initial public offering in 2008
                    </Heading>
                    <Text
                      as="p"
                      className="text-gray-700 text-lg font-normal leading-[180%]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, On the other hand,
                      we denounce with righteous indignation and dislike men who
                      are so beguiled and demoralized by the charms of pleasure
                      of the moment.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="../../../public/image/img_rectangle_20_589x531.png"
              alt="image_four"
              className="w-[47%] md:w-full md:h-[589px] object-cover rounded-[10px]"
            />
          </div>
        </div>
        {/* Founders end */}

        {/* vission start */}
        <div className="flex flex-row justify-end w-full pl-14 pr-[120px] md:px-5">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-2 max-w-[1150px]">
            <Img
              src="../../../image/img_rectangle_20_589x496.png"
              alt="image_five"
              className="w-[40%] md:w-full md:h-[489px] object-cover rounded-[10px]"
            />

            <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-14">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-3.5">
                <Heading
                  size="4xl"
                  as="h2"
                  className="tracking-[-0.72px] text-4xl font-extrabold"
                >
                  Our vision is simple.
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-700 text-lg font-normal leading-[180%]"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, on the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                <Heading
                  size="lg"
                  as="h3"
                  className="tracking-[-0.40px] text-xl font-semibold"
                >
                  Kausar Pial
                </Heading>
                <Heading
                  size="md"
                  as="h4"
                  className="mb-0.5 !text-gray-700 text-lg font-semibold"
                >
                  CEO at Static Mania
                </Heading>
              </div>
            </div>
          </div>
        </div>
        {/* vission end */}

        {/* Team membars start */}
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[58px] md:px-5 max-w-[1200px]">
            {" "}
            <Heading
              size="4xl"
              as="h2"
              className="tracking-[-0.72px] text-center text-4xl font-extrabold"
            >
              Relasto Team members
            </Heading>
            <div className="justify-center w-full gap-6 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <TeamCard className="flex flex-col items-center justify-start w-full gap-4" />
              <TeamCard className="flex flex-col items-center justify-start w-full gap-4" />
              <TeamCard className="flex flex-col items-center justify-start w-full gap-4" />
              <TeamCard className="flex flex-col items-center justify-start w-full gap-4" />
              <TeamCard className="flex flex-col items-center justify-start w-full gap-4" />
            </div>
          </div>
        </div>

        {/* Team membars end */}
        <NewsAndConsult />
      </div>
    </>
  );
}
