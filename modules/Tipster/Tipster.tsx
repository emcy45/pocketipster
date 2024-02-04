import { H1, H3 } from "@/components/Primitives/Headings";
import { FunctionComponent } from "react";
import { MatchLine } from "./components/MatchLine";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SaveButton } from "./components/SaveButton";

export const Tipster: FunctionComponent = () => {
  return (
    <div className=" justify-center my-4 lg:my-6 flex-col flex md:gap-4 border-4 border-primary-500 rounded-2xl p-1 md:p-4">
      <H1>Moje typy:</H1>
      <div className="flex items-center justify-center flex-row gap-4">
        <ArrowLeft className="hover:text-primary-400" />
        <H3 className="">1. kolejka</H3>
        <ArrowRight className="hover:text-primary-400" />
      </div>

      <MatchLine />
      <SaveButton />
    </div>
  );
};
