import React from "react";

import { MainHero } from "../components/MainHero";
import { OurBrands } from "../components/OurBrands";
import { OurValues } from "../components/OurValues";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <div>
      <SEO keywords={[`bietigheim sunshine`, `e-commerce`]} title="Home" />

      <MainHero />
      <OurValues />
      <OurBrands />
    </div>
  );
}

export default IndexPage;
