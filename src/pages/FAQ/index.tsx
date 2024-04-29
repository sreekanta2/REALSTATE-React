import { useState } from "react";
import { Heading, Img, Input, Text } from "../../components";

export default function FAQ() {
  const [searchBarValue23, setSearchBarValue23] = useState("");
  return (
    <div className="flex flex-row justify-center w-full bg-[#fff9f6]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-center justify-start w-full pt-[7px] gap-[33px] md:px-5 max-w-[1200px]">
          <Heading
            size="5x1 "
            as="h1"
            className="tracking-[-0.92px] text-center text-[46px] font-extrabold"
          >
            Search Property / Anything
          </Heading>
          <div className="flex flex-col items-center justify-start w-full gap-[25px]">
            <Input
              shape="round"
              name="search"
              placeholder="Search Property / Anything"
              value={searchBarValue23}
              onChange={(e: string) => setSearchBarValue23(e)}
              suffix={
                searchBarValue23?.length > 0 ? (
                  <Img
                    src="../../../public/image/img_icon_24px_filter.svg"
                    alt="icon/24px/ filter"
                    onClick={() => setSearchBarValue23("")}
                    className="cursor-pointer"
                  />
                ) : null
              }
              className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
            />
            <div className="flex flex-col items-start justify-start w-full gap-18 p-[27px] sm:p-5 border-blue_gray-108_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start w-[64%] md:w-full pt-[3px] gap-[11px]">
                <Heading
                  size="1g"
                  as="h2"
                  className="tracking-[-.48px] text-xl font-semibold"
                >
                  You&#39;re viewing sample results.
                </Heading>
                <div className="flex flex-col items-start justify-start w-full gap-1">
                  <a
                    href="https://relasto.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Heading
                      as="h3"
                      className="!text-gray-600_02 text-base font-semibold"
                    >
                      https://relasto.com
                    </Heading>
                  </a>
                  <Text
                    size="xs"
                    as="p"
                    className="text-sm font-normal leading-[150%]"
                  >
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                    quibusdam autem suscipit culpa perspiciatis. Exercitationem
                    dolorum dolore perferendis praesen
                  </Text>
                </div>
              </div>
              <div className="Flex flex-col w-full gap-10 md:gap-2.5">
                <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                  {" "}
                  <Heading
                    size="1g"
                    as="h4"
                    className="tracking-[-0.40px] text-xl font-semibold"
                  >
                    Add CMS or Business Hosting and index your site to see real
                    search results!
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Heading
                      as="h5"
                      className="text-gray-600_02 text-base font-semibold"
                    >
                      https://relasto.com
                    </Heading>
                    <Text size="xs" as="p" className="text-sm font-normal">
                      Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                      quibusdam autem suscipit culpa perspiciatis.
                      Exercitationem dolorum dolore perferendis praesen
                    </Text>
                  </div>
                </div>
                <div className="w-[1140px] h-px bg-blue_gray-100_01" />
                <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                  {" "}
                  <Heading
                    size="lg"
                    as="h6"
                    className="tracking-[-0.40px] text-xl font-semibold"
                  >
                    You&#39;re viewing sample results.
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Heading
                      as="h6"
                      className="!text-gray-600_02 text-base font-semibold"
                    ></Heading>
                    <Text size="xs" as="p" className="text-sm font-normal">
                      Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                      quibusdam autem suscipit culpa perspiciatis.
                      Exercitationem dolorum dolore perferendis praesen
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
