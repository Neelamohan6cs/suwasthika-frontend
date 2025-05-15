import { Award, FlaskRound, Leaf } from "lucide-react";

const features = [
  {
    icon: <Award className="text-2xl" />,
    title: "Premium Quality",
    description: "All our products meet the highest industry standards and quality control measures."
  },
  {
    icon: <FlaskRound className="text-2xl" />,
    title: "Scientifically Formulated",
    description: "Balanced nutrition developed by experts to enhance animal health and productivity."
  },
  {
    icon: <Leaf className="text-2xl" />,
    title: "Sustainable Practices",
    description: "Environmentally conscious production methods for a better tomorrow."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">
            Why Choose Suwasthika?
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            We're committed to providing the highest quality feed products for your livestock.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-neutral-100 rounded-lg p-6 text-center hover:shadow-md transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
