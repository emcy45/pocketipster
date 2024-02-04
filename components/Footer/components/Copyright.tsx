import { FunctionComponent } from "react";

const YEAR = new Date().getFullYear();
type CopyrightProps = {
  className?: string;
};

export const Copyright: FunctionComponent<CopyrightProps> = ({ className }) => (
  <div className="">
    <div className="flex gap-2 justify-center p-2 text-tertiary-500">
      Made by
      <div className=" font-semibold text-tertiary-500">Michał Pawlik</div>
    </div>
  </div>
);
