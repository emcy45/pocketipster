import { H1, H2, H3 } from "@/components/Primitives/Headings";
import { FunctionComponent } from "react";
import { MatchLine } from "./components/MatchLine";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { InputText } from "@/components/Primitives/Input";
import { SaveButton } from "@/components/SaveButton";

export const Tipster: FunctionComponent = () => {
  return (
    <div className=" justify-center my-4 lg:my-6 flex-col flex md:gap-4 p-1 md:p-4">
      <H1>Bonus:</H1>
      <div className="flex flex-col justify-center items-center">
        <H3 className="">Zwycięzca:</H3>
        <InputText />
      </div>
      <div className="flex flex-col justify-center  items-center">
        <H3 className="">Król strzelców:</H3>
        <InputText />
      </div>
      <SaveButton Text="Zapisz" />

      <H1 className="mt-8">Moje typy:</H1>
      <div className="flex items-center justify-center flex-row gap-4">
        <ArrowLeft className="hover:text-primary-400" />
        <H3 className="">1. kolejka</H3>
        <ArrowRight className="hover:text-primary-400" />
      </div>

      <MatchLine />
      <SaveButton Text="Zapisz typy" />
    </div>
  );
};
