import { ClassName, cn } from "@/utils/styles";
import { FunctionComponent, ReactNode } from "react";

type ParagraphProps = {
  className?: ClassName;
  children: ReactNode;
};

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  className,
  children,
}) => (
  <p
    className={cn(
      "whitespace-pre-wrap text-tertiary-500 m-2 text-justify",
      className
    )}
  >
    {children}
  </p>
);
