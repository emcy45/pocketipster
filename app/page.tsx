import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/modules/Hero";
import { Rules } from "@/modules/Rules";
import { Tipster } from "@/modules/Tipster/Tipster";
import { UpcomingMatch } from "@/modules/UpcomingMatch";

import { FunctionComponent } from "react";

const Home: FunctionComponent = () => (
  <>
    <Hero />
    <UpcomingMatch />
    <Tipster />
    <Rules />
    <Footer />
  </>
);

export default Home;
