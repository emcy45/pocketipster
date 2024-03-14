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
      "bg-secondary-500 p-1 size-5 md:size-6 text-center rounded-sm ",
      className
    )}
  />
);

export const InputText: FunctionComponent<InputProps> = ({ className }) => (
  <input
    type="text"
    inputMode="text"
    className={cn(
      "bg-dark border-2 p-1 border-primary-500 mx-4 text-center rounded-sm text-secondary-500 font-bold"
    )}
  />
);
