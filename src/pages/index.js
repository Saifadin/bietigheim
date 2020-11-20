import React from "react";
import { Footer } from "../components/Footer";

import SEO from "../components/seo";
import { MainHero } from "../components/MainHero";
import { OurBrands } from "../components/OurBrands";
import { OurValues } from "../components/OurValues";
// import { WorkWithUs } from "../components/WorkWithUs";

function IndexPage() {
  return (
    <div>
      <SEO keywords={[`bietigheim sunshine`, `e-commerce`]} title="Home" />

      <MainHero />
      <OurValues />
      <OurBrands />
      {/* <WorkWithUs /> */}

      <Footer />
    </div>
  );
}

export default IndexPage;
