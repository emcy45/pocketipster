import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/modules/Hero";
import { Rules } from "@/modules/Rules";
import { Schedule } from "@/modules/Schedule";

import { UpcomingMatch } from "@/modules/UpcomingMatch";

import { FunctionComponent } from "react";

const Home: FunctionComponent = () => (
  <>
    <Hero />
    <UpcomingMatch />
    <Schedule />
    <Rules />
    <Footer />
  </>
);

export default Home;
