import Mission from "@/components/about/Mission";
import Quality from "@/components/about/Quality";

const About = () => {
  return (
    <div className="pt-16" id="about">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Founded with a vision to revolutionize animal nutrition, Suwasthika has been at the forefront of developing premium quality feed products for over a decade.
              </p>
              <p className="text-neutral-700 mb-4">
                Our journey began with a simple mission: to enhance livestock health and productivity through scientifically formulated feeds. Today, we've grown into a trusted name among farmers across the region.
              </p>
              <p className="text-neutral-700">
                With state-of-the-art manufacturing facilities and a dedicated research team, we continue to innovate and create products that meet the evolving needs of modern animal husbandry.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1588773846628-13fce0a32105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Suwasthika manufacturing facility" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Mission />
      <Quality />
    </div>
  );
};

export default About;
