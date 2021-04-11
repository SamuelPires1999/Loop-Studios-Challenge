import CreationsSection from "../components/CreationsSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InteractiveSection from "../components/InteractiveSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <InteractiveSection/>
      <CreationsSection/>
      <Footer/>
    </div>
  )
}
