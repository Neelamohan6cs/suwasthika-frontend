import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative bg-primary text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Premium Animal Feed for Healthier Livestock
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Suwasthika provides scientifically formulated feed solutions that promote animal health and maximize productivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <a className="px-6 py-3 bg-accent text-neutral-900 rounded-md font-heading font-medium hover:bg-opacity-90 transition shadow-md">
                Our Products
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-6 py-3 bg-white text-primary rounded-md font-heading font-medium hover:bg-opacity-90 transition shadow-md">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
