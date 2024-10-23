/** @format */

import { TEInput } from "tw-elements-react";

interface InputI {
  type?: string;
  label?: string;
  size?: string;
  className?: string;
  onChange?: (value: string) => void;
  ref: React.Ref<HTMLInputElement>;
}
const Input = ({ type, label, size, className, onChange, ref }: InputI) => {
  return (
    <TEInput
      type={type}
      label={label}
      size={size}
      className={className}
      onChange={(e) => (onChange ? onChange(e.target.value) : null)}
      ref={ref}
    />
  );
};

export { Input };
