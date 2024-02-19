import React from "react";
import WhiteningBanner from "./Whitening-header";
import WhiteningCta from "./WhiteningCta";
import Range from "./Range";
import ProductsBanner from "./ProductsBanner";
import Faq from "./Faq";
import Types from "./Types";
import HomeBanner from "../../home/HomeBanner";

const Whitening = () => {
  return (
    <>
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <Faq />
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
};

export default Whitening;
