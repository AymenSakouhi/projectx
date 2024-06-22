import CallToAction from "@/home/component/callToAction";
import LandingPage from "@/home/component/landingPage";
import AboutUs from "@/home/component/aboutUs";
import OverViewPage from "@/home/component/overViewPage";
import StaticsComponent from "./component/staticsComponent";
export default function HomePage() {
  return (
    <>
      <LandingPage />
      <CallToAction />
      <AboutUs />
      <OverViewPage />
      <StaticsComponent />
    </>
  );
}
