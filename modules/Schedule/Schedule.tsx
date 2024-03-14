import { H1, H2, H3 } from "@/components/Primitives/Headings";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";

// interface Meeting {
//   date: string;
//   time: string;
//   home: string;
//   away: string;
// }

export const Schedule: FunctionComponent = async () => {
  return (
    <div className=" justify-center p-4  my-4 lg:mb-6">
      <H1>Terminarz:</H1>
      <div className="flex items-center justify-center flex-row gap-4">
        <ArrowLeft className="hover:text-primary-400" />
        <H3 className="">1. kolejka</H3>
        <ArrowRight className="hover:text-primary-400" />
      </div>

      <div className="flex items-center mx-2 lg:mx-8">
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-end items-center basis-1/3 italic">
          <div>Data</div>
          <div>Godzina</div>
        </div>
        <div className="flex basis-2/3 justify-between md:justify-center ml-4">
          <div className="flex basis-1/3 justify-center  text-center items-center">
            Home
          </div>
          -
          <div className="flex basis-1/3 justify-center  text-center items-center">
            Away
          </div>
        </div>
      </div>
    </div>
  );
};
