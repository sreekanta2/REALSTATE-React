import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  tarwhite: "border-blue_gray-100_01 border border-solid bg-white-A700",
} as const;

const sizes = {
  xs: "h-[152px] p-[19px] text-lg",
} as const;

type TextAreaProps = Omit<
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    onChange: (value: string) => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      name = "",
      placeholder = "",
      shape = "",
      size = "xs",
      variant = "tarwhite",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      if (onChange) onChange(e.target.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className}  ${
          (shape && shapes[shape as keyof typeof shapes]) || ""
        } ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

export { TextArea };
