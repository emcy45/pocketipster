import { H1, H2, H3 } from "@/components/Primitives/Headings";

import { FunctionComponent } from "react";
import CountdownTimer from "./components/CountdownTimer";

const targetDate = "2024-06-14T21:00:00";

export const UpcomingMatch: FunctionComponent = () => {
  return (
    <div className=" justify-center p-4  my-4 lg:mb-6">
      <H1>Najbliższe spotkanie:</H1>
      <H3 className="">14.06.2024 21:00</H3>
      <H2>Niemcy - Szkocja</H2>
      {/* <Countdown /> */}

      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};
