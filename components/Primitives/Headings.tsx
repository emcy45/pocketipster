import { ClassName, cn } from "@/utils/styles";
import { FunctionComponent, ReactNode } from "react";

type TitleProps = {
  className?: ClassName;
  children: ReactNode;
};

export const H1: FunctionComponent<TitleProps> = ({ className, children }) => (
  <h1
    className={cn(
      "text-2xl font-bold drop-shadow text-secondary-500 m-2 flex justify-center text-center",
      className
    )}
  >
    {children}
  </h1>
);

export const H2: FunctionComponent<TitleProps> = ({ className, children }) => (
  <h2
    className={cn(
      "text-xl font-light drop-shadow text-tertiary-500 m-2 text-justify flex justify-center",
      className
    )}
  >
    {children}
  </h2>
);

export const H3: FunctionComponent<TitleProps> = ({ className, children }) => (
  <h3
    className={cn(
      "text-lg font-light drop-shadow text-tertiary-500 m-2 text-justify flex justify-center",
      className
    )}
  >
    {children}
  </h3>
);
