import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Img } from "../../components";
import CheckBox from "../../components/Checkbox";
import { GoogleMap } from "../../components/GoogleMap";
import LandingPageCard from "../../components/LandingPageCard";
import { RatingBar } from "../../components/RatingBar";
import { TextArea } from "../../components/TextArea";

export default function PropertyDetails() {
  const [open, setOpen] = useState(false);
  const lists = [1, 2, 3, 4];
  return (
    <div className="bg-[#f5f7fb] w-full">
      <div className="  max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2  grid-cols-3 gap-6 ">
        <div className="col-span-2">
          {/* <ThumbSlider /> */}
          {/* description */}
          <div className="bg-white-A700   shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-14 p-8">
            <Heading
              size="md"
              as="h1"
              className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
            >
              Description
              <div className="border-2 border-b w-12 border-red-300" />
            </Heading>
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit. Lorem
              ipsum dolor sit
            </p>{" "}
            <br />
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit. Lorem
              ipsum dolor sit
            </p>{" "}
            <br />
            <p className="text-[16px] text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit. Lorem
              ipsum dolor sit
            </p>{" "}
          </div>

          {/* property type */}
          <div className="bg-white-A700 flex flex-col gap-20  shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-24 p-8">
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Property Details
                <div className="border-2 border-b w-12 border-red-300" />
              </Heading>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3  ">
                <p className=" text-gray-500   font-semibold pb-4">
                  Property ID:{" "}
                  <span className="text-sm font-normal">V254680</span>
                </p>{" "}
                <p className=" text-gray-500   font-semibold pb-4">
                  Property ID:{" "}
                  <span className="text-sm font-normal">V254680</span>
                </p>{" "}
                <p className=" text-gray-500   font-semibold pb-4">
                  Property ID:{" "}
                  <span className="text-sm font-normal">V254680</span>
                </p>{" "}
                <p className=" text-gray-500   font-semibold pb-4">
                  Property ID:{" "}
                  <span className="text-sm font-normal">V254680</span>
                </p>
              </div>
            </div>
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Amenities
                <div className="border-2 border-b w-12 border-red-300" />
              </Heading>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3  ">
                {lists.map((list: number) => (
                  <div className="flex gap-2    items-center pb-4" key={list}>
                    <CheckBox
                      className=" text-gray-500   font-semibold  "
                      checked
                    />
                    <span>Air Cond</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* floor plans */}
          <div className="bg-white-A700   shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-14 p-8">
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Floor Plans
                <div className="border-2 border-b w-12 border-red-300" />
              </Heading>
              <div>
                <Img
                  src="../../../public/image/floor-plan-1.png"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          {/* nearby */}
          <div className="bg-white-A700 flex flex-col gap-6  shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-24 p-8">
            <Heading
              size="md"
              as="h1"
              className="tracking-[-0.92px] text-[18px] font-extrabold  "
            >
              What's Nearby
              <div className="border-2 border-b w-12 border-red-300" />
            </Heading>
            {/* education */}

            <div className=" flex flex-col gap-4">
              <div className="flex gap-1">
                <Img
                  src="../../../public/image/graduation-cap-line.svg"
                  className="w-6  "
                />
                <Heading
                  size="md"
                  as="h3"
                  className="tracking-[-0.92px] text-[18px] font-semibold text-[#21c4c4]  "
                >
                  Education
                </Heading>
              </div>
              {lists.map((list) => (
                <div className="flex justify-between items-center" key={list}>
                  <p className=" text-gray-500   font-semibold  ">
                    Education Mandarin
                    <span className="text-sm font-normal"> (15.61 miles)</span>
                  </p>
                  <RatingBar
                    value={3}
                    size={16}
                    className="flex justify-between"
                  />
                </div>
              ))}
            </div>
            {/* health and  */}

            <div className=" flex flex-col gap-4">
              <div className="flex gap-1">
                <Img
                  src="../../../public/image/mental-health-line.svg"
                  className="w-6  "
                />
                <Heading
                  size="md"
                  as="h3"
                  className="tracking-[-0.92px] text-[18px] font-semibold text-[#0FCF63]  "
                >
                  Health & Medical
                </Heading>
              </div>
              {lists.map((list) => (
                <div className="flex justify-between items-center" key={list}>
                  <p className=" text-gray-500   font-semibold  ">
                    Education Mandarin
                    <span className="text-sm font-normal"> (15.61 miles)</span>
                  </p>
                  <RatingBar
                    value={3}
                    size={16}
                    className="flex justify-between"
                  />
                </div>
              ))}
            </div>
            {/* transport  */}

            <div className=" flex flex-col gap-4">
              <div className="flex gap-1">
                <Img
                  src="../../../public/image/roadster-line.svg"
                  className="w-6  "
                />
                <Heading
                  size="md"
                  as="h3"
                  className="tracking-[-0.92px] text-[18px] font-semibold text-red-500  "
                >
                  Transport
                </Heading>
              </div>
              {lists.map((list) => (
                <div className="flex justify-between items-center" key={list}>
                  <p className=" text-gray-500   font-semibold  ">
                    Education Mandarin
                    <span className="text-sm font-normal"> (15.61 miles)</span>
                  </p>
                  <RatingBar
                    value={3}
                    size={16}
                    className="flex justify-between"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* video */}
          <div className="bg-white-A700   shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-14 p-8">
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Property Video
                <div className="border-2 border-b w-12 border-red-300" />
              </Heading>
              <div className="relative">
                <Img
                  src="../../../public/image/home-slider-4.jpg"
                  className="w-full h-[400px]"
                />
                {!open && (
                  <div
                    className="video absolute inset-0 flex justify-center items-center "
                    onClick={() => setOpen(true)}
                  >
                    <ion-icon name="play"></ion-icon>
                  </div>
                )}
                {open && (
                  <>
                    <p
                      className="absolute top-[-30px] right-0 text-[24px] cursor-pointer font-bold text-gray-600"
                      onClick={() => setOpen(false)}
                    >
                      X
                    </p>
                    <iframe
                      className="absolute top-0"
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/14semTlwyUY?si=JEsbMEAE3X-oypnl"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </>
                )}
              </div>
            </div>
          </div>
          {/*Location */}
          <div className="bg-white-A700   shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-14 p-8">
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Location
                <div className="border-2 border-b w-12 border-red-300" />
              </Heading>

              <GoogleMap showMarker={false} className="h-[400px] w-full" />
            </div>
          </div>
          {/* review */}
          <div className="bg-white-A700   shadow-[0_3px_10px_rgb(0,0,0,0.2)] my-14 p-8">
            <div>
              <Heading
                size="md"
                as="h1"
                className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
              >
                Reviews
              </Heading>

              <div className="flex flex-col gap-10">
                {lists.map((review) => (
                  <div
                    key={review}
                    className="flex flex-col   w-full gap-10 p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]"
                  >
                    <div className=" flex justify-between ">
                      <div className="flex gap-2">
                        <Img
                          src="../../../public/image/img_ellipse_2695.png"
                          alt="taylor_wilson"
                          className="h-[80px] w-[80px] md:h-auto rounded-[50%]"
                        />

                        <div>
                          <Heading
                            size="xl"
                            as="h5"
                            className="mt-0.5 tracking-[-0.56px] text-[18px] font-extrabold"
                          >
                            Taylor Wilson
                          </Heading>
                          <Heading
                            size="md"
                            as="h6"
                            className="text-sm font-semibold   !text-gray-500"
                          >
                            Product Manager Static Mania
                          </Heading>
                          <Heading
                            size="md"
                            as="h6"
                            className="text-lg font-semibold !text-gray-600_02 "
                          >
                            May 30 2020
                          </Heading>
                        </div>
                      </div>
                      <RatingBar
                        value={3}
                        size={24}
                        starCount={4}
                        className="flex justify-between"
                      />{" "}
                    </div>
                    <div className="ml-20">
                      <Heading
                        size="2xl"
                        as="h2"
                        className="  !text-gray-600_02  font-semibold leading-[165%]"
                      >
                        Eget eu massa et consectetur. Mauris donec. Leo a, id
                        sed duis proin sodales. Turpis viverra diam porttitor
                        mattis morbi ac amet. Euismod commodo. We get you
                        customer relationships that last.{" "}
                      </Heading>
                      <div className="flex gap-6 sm:flex-col">
                        <Img
                          src="../../../public/image/s-3.jpg"
                          className="w-44"
                        />
                        <Img
                          src="../../../public/image/s-3.jpg"
                          className="w-44"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  color="gray_600_02"
                  variant="outline"
                  shape="round"
                  rightIcon={
                    <Img src="../../../public/image/img_arrow_down.svg" />
                  }
                  className="gap-1 font-semibold  w-64    mb-6 sm:min-w-full"
                >
                  See more
                </Button>
              </div>
            </div>
            {/* add review */}
            <hr className="mb-6" />
            <Heading
              size="md"
              as="h1"
              className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
            >
              Add Review
              <div className="border-2 border-b w-12 border-red-300" />
            </Heading>
            <form action="" className="w-full">
              <div className="flex justify-between">
                <div>
                  <p>Your rating for this listing</p>
                  <RatingBar
                    value={1}
                    size={24}
                    isEditable={true}
                    starCount={4}
                    className="flex justify-between"
                  />
                </div>
                <div className="flex  flex-col gap-4  ">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col   justify-center  w-44  h-14    border-gray-300  rounded-full cursor-pointer bg-[#20c0f3]  "
                  >
                    <div className="flex   gap-2 px-4 items-center justify-center text-white ">
                      <svg
                        className="w-8 h-8   text-white dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p>Upload file</p>
                    </div>

                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <TextArea
                shape="round"
                name="inputbox_one"
                placeholder="Write review"
                className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold focus:outline-none focus:border mt-12 "
              />
              <Button
                color="gree"
                variant="outline"
                shape="round"
                className="gap-1 font-semibold  w-64  my-4     sm:min-w-full"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="col-span-1">Content 2</div>
      </div>
      <div className="  max-w-[1200px] mx-auto md:mx-8 my-8 ">
        <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
          <Heading
            size="md"
            as="h1"
            className="tracking-[-0.92px] text-[18px] font-extrabold mb-6"
          >
            Similar Property
            <div className="border-2 border-b w-12 border-red-300" />
          </Heading>
          <div className="flex flex-row justify-start items-center mt-[7px] gap-2 sm:mt-0">
            <Heading
              size="md"
              as="h3"
              className="mt-0.5 !text-orange-A700 text-lg font-bold"
            >
              <Link to="/property"> Explore All</Link>
            </Heading>
            <Img
              src="../../../public/image/img_icon_24px_v.svg"
              alt="icon24pxv_one"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>
        <div className=" grid justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 ">
          {lists.map(() => (
            <LandingPageCard className="bg-white-A700" />
          ))}
        </div>
      </div>
    </div>
  );
}
