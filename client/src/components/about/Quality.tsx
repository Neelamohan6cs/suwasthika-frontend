import { Award, FlaskRound, Cog, ClipboardCheck } from "lucide-react";

const standards = [
  {
    icon: <Award className="text-xl" />,
    title: "Certified Raw Materials",
    description: "We source only premium quality ingredients from trusted suppliers, each batch tested for purity and nutritional content."
  },
  {
    icon: <FlaskRound className="text-xl" />,
    title: "Rigorous Testing",
    description: "Every production batch undergoes extensive laboratory testing to ensure consistency and nutritional accuracy."
  },
  {
    icon: <Cog className="text-xl" />,
    title: "Modern Manufacturing",
    description: "State-of-the-art facilities with automated processing ensure precision in formulation and minimal contamination risk."
  },
  {
    icon: <ClipboardCheck className="text-xl" />,
    title: "Industry Compliance",
    description: "Our products meet and exceed all regulatory standards for animal feed quality and safety."
  }
];

const Quality = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">Our Quality Standards</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">How we ensure the highest quality in every product</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {standards.map((standard, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                {standard.icon}
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-2">{standard.title}</h3>
                <p className="text-neutral-700">{standard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
