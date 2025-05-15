import { Star, Microscope, Handshake } from "lucide-react";

const values = [
  {
    icon: <Star className="text-2xl" />,
    title: "Quality Excellence",
    description: "We never compromise on the quality of our products, ensuring every batch meets the highest standards."
  },
  {
    icon: <Microscope className="text-2xl" />,
    title: "Scientific Innovation",
    description: "Our dedicated research team continuously works to improve formulations based on the latest nutritional science."
  },
  {
    icon: <Handshake className="text-2xl" />,
    title: "Customer Partnership",
    description: "We view our customers as partners in progress, working together to achieve better livestock outcomes."
  }
];

const Mission = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-2">Our Mission & Values</h2>
          <p className="max-w-2xl mx-auto opacity-90">The principles that guide everything we do at Suwasthika</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
              <p className="opacity-90">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
