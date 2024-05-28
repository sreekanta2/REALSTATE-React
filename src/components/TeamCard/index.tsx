import { Heading } from "../Heading";
import { Img } from "../Img";
import { Text } from "../Text";

export default function TeamCard({
  imageOne = "../../../public/image/img_rectangle_5597.png",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src={imageOne}
        alt="kausar_pial_one"
        className="w-[282px] md:h-auto object-cover rounded-[10px]"
      />
      <div className="flex flex-col items-start justify-center w-full gap-[3px]">
        <Heading
          size="lg"
          as="h3"
          className="tracking-[-0.40px] text-xl font-semibold"
        >
          Kausar Pial
        </Heading>
        <Text as="p" className="mb-0.5 !text-gray-700 text-lg font-normal">
          CEO
        </Text>
      </div>
    </div>
  );
}
