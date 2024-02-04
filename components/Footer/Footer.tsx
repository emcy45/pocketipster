import { FunctionComponent } from "react";
import { UpButton } from "./components/UpButton";
import { Copyright } from "./components/Copyright";

export const Footer: FunctionComponent = () => {
  return (
    <div className="  h-auto flex flex-col md:mt-16 mt-8 pb-4">
      <UpButton />
      <Copyright />
    </div>
  );
};
