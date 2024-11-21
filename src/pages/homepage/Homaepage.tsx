import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import SubscribeMail from "./sections/SubscribeMail";
import HeroSection from "./sections/HeroSection";
import Dishes from "./sections/dishes";
import Welcome from "./sections/welcome";
import ExpertChef from "./sections/ExpertChef";
import Testimonials from "./sections/Testimonials";

function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Dishes />
      <Welcome />
      <ExpertChef />
      <Testimonials />
      <SubscribeMail />
      <Footer />
    </>
  );
}

export default Homepage;
