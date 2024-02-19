import React from "react";
import Faq from "./Faq";
import ToothExtractionInfo from "./ToothExtractionInfo";
import HomeBanner from "../../home/HomeBanner";
import ToothExtractionBody from "./ToothExtractionBody"
import ToothExtractionHeader from "./ToothExtractionHeader";
const ClearAligners = () => {
  return (
    <>
      <ToothExtractionHeader/>
      <ToothExtractionBody/>
      <Faq />
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ToothExtractionInfo />
    </>
  );
};

export default ClearAligners;
