import { Input } from "@/components/Primitives/Input";
import { Minus } from "lucide-react";
import { FunctionComponent } from "react";

export const MatchLine: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex items-center mx-2 lg:mx-8">
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-end items-center basis-1/4 italic">
          <div>14.06.2024</div>
          <div>21:00</div>
        </div>
        <div className="flex basis-3/4 justify-center ml-4">
          <div className="flex basis-1/3 justify-center md:justify-end text-center items-center">
            Niemcy
          </div>
          <div className="flex basis-1/3 justify-center items-center text-primary-500 font-bold">
            <Input />

            <div className="text-tertiary-500 mx-1 md:mx-4">-</div>
            <Input />
          </div>
          <div className="flex basis-1/3 justify-center md:justify-start text-center items-center">
            Szkocja
          </div>
        </div>
      </div>

      <div className="flex items-center mx-2 lg:mx-8">
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-end items-center basis-1/4 italic">
          <div>15.06.2024</div>
          <div>15:00</div>
        </div>
        <div className="flex basis-3/4 justify-center ml-4">
          <div className="flex basis-1/3 justify-center md:justify-end text-center items-center">
            Węgry
          </div>
          <div className="flex basis-1/3 justify-center items-center text-primary-500 font-bold">
            <Input />

            <div className="text-tertiary-500 mx-1 md:mx-4">-</div>
            <Input />
          </div>
          <div className="flex basis-1/3 justify-center md:justify-start text-center items-center">
            Szwajcaria
          </div>
        </div>
      </div>
    </div>
  );
};
