import { H2 } from "@/components/Primitives/Headings";
import { FunctionComponent } from "react";

export const SaveButton: FunctionComponent = () => {
  return (
    <>
      <div className="flex justify-center hover:delay-300 cursor-pointer my-2">
        <H2 className="w-48 bg-primary-500 font-bold p-2 rounded-xl">
          Zapisz moje typy
        </H2>
      </div>
    </>
  );
};
