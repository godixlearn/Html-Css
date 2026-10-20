import { useState } from "react";

import { getHomePageData } from "../../services/bannerService";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import OfferBanner from "../../components/OfferBanner/OfferBanner";

function Home() {
  const [homeData] = useState(() => getHomePageData());

  return (
    <div>
      <HeroBanner banner={homeData.hero} />
      <OfferBanner offer={homeData.offer} />
    </div>
  );
}

export default Home;
