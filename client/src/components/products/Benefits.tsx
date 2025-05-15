import { Check } from "lucide-react";

const benefits = [
  {
    title: "Improved Growth Rate",
    description: "Scientifically balanced nutrition leads to faster, healthier growth in all livestock categories."
  },
  {
    title: "Enhanced Reproduction",
    description: "Specialized formulations support reproductive health and offspring development."
  },
  {
    title: "Disease Resistance",
    description: "Immune-boosting ingredients help animals fight off common diseases and stay healthy."
  },
  {
    title: "Higher Productivity",
    description: "Better feed conversion results in improved milk, meat, or egg production."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Healthy livestock benefiting from quality feed" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-4">
              Benefits of Suwasthika Feed Products
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-neutral-700">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
