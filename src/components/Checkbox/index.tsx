/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

const shapes = {
  round: "rounded",
} as const;

const variants = {
  outline: {
    gray_900: "border-gray-900 border-2 border-solid text-gray-900",
  },
} as const;

const sizes = {
  xs: "h-[25px] w-[25px] p-1 text-lg", // Fixed typo: "p-1" instead of "p1-2"
} as const;

type VariantColors = keyof (typeof variants)["outline"]; // Define available colors for outline variant

type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "type" | "onChange"
> &
  Partial<{
    prefix: any; // Added missing prefix
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: VariantColors;
    onClick: () => void;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      name,
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "gray_900", // Fixed typo: "gray_see" to "gray_900"
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };
    return (
      <>
        <div
          className={`${className} flex items-center gap-[5px] cursor-pointer`}
        >
          {" "}
          {/* Fixed className interpolation */}
          <input
            className={`${(shape && shapes[shape]) || ""} ${
              (size && sizes[size]) || ""
            } ${
              (variant && variants[variant]?.[color]) || "" // Use color directly without accessing the variant
            }`}
            ref={ref}
            type="checkbox"
            name={name} // Fixed name assignment
            onChange={handleChange} // Fixed onChange assignment
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  }
);

export default CheckBox; // Exporting CheckBox component
