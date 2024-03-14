import { H2 } from "@/components/Primitives/Headings";
import { FunctionComponent } from "react";

interface SaveButtonProps {
  Text: string;
}

export const SaveButton: FunctionComponent<SaveButtonProps> = ({ Text }) => {
  return (
    <>
      <div className="flex justify-center hover:delay-300 cursor-pointer my-2">
        <H2 className="w-48 bg-primary-500 font-bold p-2 rounded-xl hover:bg-primary-400">
          {Text}
        </H2>
      </div>
    </>
  );
};
