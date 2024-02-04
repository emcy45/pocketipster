import { ClassName, cn } from "@/utils/styles";
import { FunctionComponent, ReactNode } from "react";

type ListProps = {
  className?: ClassName;
  children: ReactNode;
};

export const List: FunctionComponent<ListProps> = ({ className, children }) => (
  <li
    className={cn(
      "whitespace-pre-wrap text-tertiary-500 my-2 text-justify",
      className
    )}
  >
    {children}
  </li>
);
