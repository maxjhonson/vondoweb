import React from "react";
import GeneralInformation from "../components/homePage/GeneralInformation";
import TourList from "../components/tour/TourList";
import PrincipalCarousel from "../components/PrincipalCarousel";
import PrincipalHeader from "../components/PrincipalHeader";

function HomePage(props) {
  return (
    <div>
      <PrincipalHeader />
      <PrincipalCarousel />
      <GeneralInformation />
      <TourList />
    </div>
  );
}

export default HomePage;
