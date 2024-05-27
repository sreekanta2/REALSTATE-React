/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
const sizes = {};
export type HeadingProps = Partial<{
  className: string;

  as: any;
  size: string;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "5",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={` text-gray-900 font-manrope ${className} ${
        (size && sizes[size as keyof typeof sizes]) || ""
      }`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Heading };
