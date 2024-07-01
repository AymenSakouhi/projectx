import LandingPage from "@/home/component/landingPage";
import AboutUs from "@/home/component/aboutUs";
import OverViewPage from "@/home/component/overViewPage";
import StaticsComponent from "./component/staticsComponent";
import ClassesInfo from "./component/classesInfo";
import InsightSection from "./component/insightSection";
import Gallery from "./component/gallery";
import OurStaff from "./component/ourStaff";
import QuotesComponent from "./component/quotesComponent";
export default function HomePage() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <OverViewPage />
      <StaticsComponent />
      <ClassesInfo />
      <InsightSection />
      <Gallery />
      <OurStaff />
      <QuotesComponent />
    </>
  );
}
