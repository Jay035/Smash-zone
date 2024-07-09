import React from "react";

type Props = {
  id: string;
  placeholder: string;
  type: string;
  value: string | number | undefined;
  name: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Custominput({
  name,
  required,
  onChange,
  value,
  id,
  placeholder,
  type,
}: Props) {
  return (
    <input
      className="w-full font-exo-2 text-[#6E6E6E] placeholder:text-[#6E6E6E] rounded-[10px] bg-transparent p-4 pl-6 border border-[#6E6E6E]"
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}
