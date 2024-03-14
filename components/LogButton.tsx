import { FunctionComponent } from "react";

interface LogButtonProps {
  Text: string;
}

export const LogButton: FunctionComponent<LogButtonProps> = ({ Text }) => {
  return (
    <>
      <div className="flex justify-center hover:delay-300 cursor-pointer my-2">
        <div className="w-48 text-secondary-500 text-center font-medium p-1 rounded-lg hover:bg-secondary-950">
          {Text}
        </div>
      </div>
    </>
  );
};
