import { ClassName, cn } from "@/utils/styles";
import { FunctionComponent, useState } from "react";

type InputProps = {
  className?: ClassName;
};

export const Input: FunctionComponent<InputProps> = ({ className }) => (
  <input
    type="text"
    pattern="[0-9]*"
    inputMode="numeric"
    className={cn(
      "bg-secondary-500 p-1 size-5 md:size-6 text-center rounded-sm",
      className
    )}
  />
);
