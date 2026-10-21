import { useState } from "react";

import { getHomePageData } from "../../services/homeService";

import HeroBanner from "../../components/HeroBanner/HeroBanner";
import OfferBanner from "../../components/OfferBanner/OfferBanner";
import CategorySection from "../../components/CategorySection/CategorySection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

function Home() {
  const [homeData] = useState(() => getHomePageData());

  return (
    <div>
      <HeroBanner banner={homeData.hero} />
      <CategorySection categories={homeData.categories} />
      <FeaturedProducts featuredProducts={homeData.featuredProducts} />
      <OfferBanner offer={homeData.offer} />
    </div>
  );
}

export default Home;
