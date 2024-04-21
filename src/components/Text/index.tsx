import React from "react";
const sizes = {
  lg: "",
  md: "",
  sm: "",
  xs: "",
};
export type TextProps = Partial<{
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-gray-600_02 font-manrope ${className}
       ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
