/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Select, { Props } from "react-select";
const shapes = {
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-700",
  },
} as const;
const sizes = {
  sm: "h-[48px] px-4 pr-[35px] text-sm",
  xs: "h-[25px] pr-[30px] text-lg",
  md: "h-[60px] px-4 text-lg",
} as const;
type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    className: string;
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    handleOnChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: keyof (typeof variants)[keyof typeof variants];
  }>;
const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "",
      size = "xs",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={` ${className} flex  ${
            (shape && shapes[shape as keyof typeof shapes]) || ""
          }  ${(size && sizes[size]) || ""} ${
            (variant &&
              variants[variant]?.[
                color as keyof (typeof variants)[typeof variant]
              ]) ||
            ""
          }`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: " !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#191919" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": {
                backgroundColor: "#191919",
                color: "#ffffff",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({ ...provided, margin: 0 }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);
export { SelectBox };
