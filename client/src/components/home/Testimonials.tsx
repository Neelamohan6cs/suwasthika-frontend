import { Star } from "lucide-react";
import { testimonials } from "@/lib/utils";

const Testimonials = () => {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Hear from farmers who trust Suwasthika products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-accent flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-current" size={18} />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">"{testimonial.content}"</p>
              <div className="font-heading font-medium">{testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
