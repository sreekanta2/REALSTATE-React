import { Link } from "react-router-dom";
import { Button, Heading, Img } from "../../components";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
      <div className="flex flex-col items-center justify-start w-full gap-[30px]">
        <Img
          src="../../../public/image/img_frame_1000001686.svg"
          alt="image"
          className="h-[488px]"
        />
        <div className="flex flex-col items-center justify-center w-[54%] md:w-full gap-[19px]">
          <Heading
            size="3x1"
            as="hl"
            className="mt-px tracking-[-0.56px] text-center text-[28px] font-extrabold"
          >
            Something wrong!
          </Heading>
          <Button
            color="gray_600_02"
            size="4xl"
            variant="outline"
            shape="round"
            rightIcon={
              <Img
                src="../../../public/image/img_icon_16px_arrow_right.svg"
                alt="icon/24px / arrow-right"
              />
            }
            className="gap-2.5 font-bold min-w-[157px] sm:min-w-full"
          >
            <Link to="/"> Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
