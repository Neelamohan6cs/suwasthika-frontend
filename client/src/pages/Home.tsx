import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div className="pt-16" id="home">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
