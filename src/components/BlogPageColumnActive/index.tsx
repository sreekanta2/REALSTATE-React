// import { Button } from "../Button";
// import { Img } from "../Img/Img";
// import { Text } from "../Text";
// interface Props {
//   className: string;
//   business: string;
//   p10delightful: string;
//   July202022: string;
//   time?: string;
//   active?: string;
// }
// export default function BlogPageColumnactive({
//   business = "Business",
//   p10delightful = "10 Delightful Dining Room Decor Trends for Spring",
//   July202022 = "July 20, 2022",
//   time = "7 min read",
//   active = "Continue Reading",
//   ...props
// }: Props) {
//   return (
//     <div {...props}>
//       <div className="flex flex-col items-center justify-start w-full gap-3">
//         <Img
//           src="images/img_rectangle_5617_350x384.png"
//           alt="Image"
//           className="w-full md:h-auto sm:w-full object-cover rounded-lg"
//         />

//         <div className="flex flex-col items-start justify-start w-full gap-2">
//           <Button className="h-[38px] px-[13px] text-gray-900 text-sm font-semibold border-blue_gray-108_01 border border-solid min-w-[89px] rounded-[18px] sm:min-w-full">
//             {/* {business} */}
//           </Button>
//           <div className="flex flex-col itens-center justify-start w-full gap-[15px]">
//             <Text className="{text-gray-980 tracking-[-0.48px] text-2xl font-bold leading-[135%]">
//               {p10delightful}
//             </Text>
//             <div className="flex flex-row justify-start w-full gap-6">
//               <div className="flex flex-row justify-start items-start w-[23%] gap-1.5">
//                 <div className="h-[5px] w-[5px] at-[5px] bg-blue_gray-108_01 rounded-sn" />
//                 <Text className="text-xs font-semibold">{July202022}</Text>
//               </div>
//               <div className="flex flex-row justify-start items-center w-[23%] gap-1.5">
//                 <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
//                 <Text className="text-xs font-semibold">{time}</Text>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-row justify-start items-center w-full gap-2">
//         <Text className="nt-0.5 text-lg font-bold">{active}</Text>
//         <img
//           src="images/ing_icon_24px_v_gray_688_82.svg"
//           alt="icon24pxv_one"
//           className="h-[24px] w-[24px]"
//         />
//       </div>
//     </div>
//   );
// }
