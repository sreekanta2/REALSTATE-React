import { Heading, Text } from "../../components";

export default function LicensePage() {
  return (
    <div>
      <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5">
        <div className="flex flex-col items-center justify-start w-full gap-[60px] mx-auto max-w-[996px]">
          <div className="flex flex-col items-center justify-start w-full gap-10">
            <div className="flex flex-col items-start justify-start w-full gap-[11px]">
              <Heading
                size="5xl"
                as="h1"
                className="tracking-[-0.92px] text-[46px] font-extrabold"
              >
                License
              </Heading>
              <Text as="p" className="text-lg font-normal">
                Last updated: January 2020
              </Text>
            </div>
            <Text as="p" className="text-lg font-normal leading-[180%]">
              <>
                Your content remains yours, which means that you retain any
                intellectual property rights that you have in your content. For
                example, you have intellectual property rights in the creative
                content you make, such as reviews you write. Or you may have the
                right to share someone else's creative content if they've given
                you their permission.
                <br />
                We need your permission if your intellectual property rights
                restrict our use of your content. You provide Google with that
                permission through this license.
              </>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[39px]">
            <div className="flex flex-col items-start justify-start w-full gap-[29px]">
              <Heading
                size="2xl"
                as="h2"
                className="tracking-[-0.48px] text-2xl font-bold"
              >
                What's covered
              </Heading>
              <Text as="p" className="text-lg font-normal">
                This license covers your content if that content is protected by
                intellectual property rights.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[22px]">
              <Heading
                size="2xl"
                as="h3"
                className="tracking-[-0.48px] text-2xl font-bold"
              >
                What's not covered
              </Heading>
              <Text as="p" className="text-lg font-normal leading-[180%]">
                We use cookies to recognize and monitor users, their on-site
                behavior, and their preferences for accessing their website.
                These cookies include the IP and time of visits by visitors.
                Visitors to Relasto that do not want cookies put on their
                browsers should configure their browsers to reject cookies
                before using the Relasto website.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
              <Heading
                size="2xl"
                as="h4"
                className="tracking-[-0.48px] text-2xl font-bold"
              >
                Price Updates
              </Heading>
              <Text as="p" className="text-lg font-normal leading-[180%]">
                <>
                  We will need to update this policy from time to time to ensure
                  that it remains up-to-date with the latest legal requirements
                  and any improvements to our privacy management practices.
                  <br />
                  When we change the policy, we will make sure that we inform
                  you, if any, of such changes. A copy of this policy's latest
                  version will always be available at this page.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-8">
              <Heading
                size="2xl"
                as="h5"
                className="mt-px tracking-[-0.48px] text-2xl font-bold"
              >
                Refund Policy
              </Heading>
              <Text as="p" className="text-lg font-normal leading-[180%]">
                But why fast loading is important? According to Neil Patel, 47%
                of people on the internet expect a web page to load in less than
                2 seconds.
              </Text>
              <Text as="p" className="text-lg font-normal leading-[180%]">
                Static websites are way faster than dynamic ones. As they don't
                have a back-end system, there is no time loss due to database
                connection. Instead, the lightweight, pre-rendered HTML files
                load incredibly fast.
              </Text>
              <Text as="p" className="text-lg font-normal" />
              <Text as="p" className="text-lg font-normal">
                You may not disclose any information about your order including,
                but not limited to, Order ID, download connection, etc.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
