import HeroHome from "../components/HeroHome";
import CicBanner from "../components/CicBanner";
import CapabilityGrid from "../components/CapabilityGrid";
import LogoStrip from "../components/LogoStrip";
import VideoSection from "../components/VideoSection";
import WhyHyland from "../components/WhyHyland";
import IndustryTabs from "../components/IndustryTabs";
import CustomerStories from "../components/CustomerStories";
import Newsroom from "../components/Newsroom";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroHome />
      <CicBanner />
      <CapabilityGrid />
      <LogoStrip />
      <VideoSection />
      <WhyHyland />
      <IndustryTabs />
      <CustomerStories />
      <Newsroom />
      <CtaBanner />
    </>
  );
}
