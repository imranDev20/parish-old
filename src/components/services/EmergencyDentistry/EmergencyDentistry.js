import React from "react";
import EmergencyBanner from "./EmergencyBanner";
import EmergencyPricing from "./EmergencyPricing";
import EmergencyServices from "./EmergencyServices";
import EmergencyFaq from "./EmergencyFaq";
import EmergencyCta from "./EmergencyCta";
import EmergencyReviews from "./EmergencyReviews";
import EmergencyAddress from "./EmergencyAddress";
import EmergencyForm from "./EmergencyForm";
import HomeBanner from "../../home/HomeBanner";

function EmergencyDentistry() {
  return (
    <>
      <EmergencyBanner />
      <EmergencyPricing />
      <EmergencyServices />
      <EmergencyFaq />
      <EmergencyCta />
      <EmergencyReviews />
      <EmergencyAddress />
      <EmergencyForm />{" "}
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
}
export default EmergencyDentistry;

export const Head = () => (
  <DynamicSeo
    title="24 Hours Private Dental Clinic in Leeds -Book Appointment Now!"
    description="Parish Dental is a leading private dental clinic in Leeds, UK offering emergency treatments and online appointments for all your dental needs. Book now!"
  />
);

