import React from "react";
import Form from "./global/form";
import PageHeader from "./global/PageHeader";
import DynamicSeo from "./global/DynamicSeo";



const AboutPage = () => {
  return (
    <>
      <PageHeader pageTitle="NHS Dental Practice Online Registration Form for Under-18 Patients" />
      <Form />
      </>
  );
};

export default AboutPage;

export const Head = () => (
  <DynamicSeo
    title="NHS Dental Registration and Services in Leeds | Parish Dental "
    description="Register for NHS dental services at Parish Dental in Leeds. Access quality treatments and care for NHS dental patients. Fill out the form now!"
  />
);