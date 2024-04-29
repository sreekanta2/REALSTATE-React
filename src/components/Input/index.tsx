/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600_02",
    gray_50_02: "bg-gray-50_02 text-gray-700",
  },
} as const;
const sizes = {
  sm: "h-[48px] p1-4 pr-[35px] text-sm",
  xs: "h-[25px] pr-[30px] text-lg",
  md: "h-[60px] px-4 text-lg",
} as const;
type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "md",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e);
    };
    return (
      <>
        <div
          className={` ${className} flex items-center justify-center  ${
            (shape && shapes[shape as keyof typeof shapes]) || ""
          } ${(size && sizes[size as keyof typeof sizes]) || ""} ${
            variants[variant]?.[
              color as keyof (typeof variants)[typeof variant]
            ] ||
            variants[variant] ||
            ""
          }${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
      </>
    );
  }
);
export { Input };
