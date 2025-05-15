import ProductCard from "@/components/products/ProductCard";
import Benefits from "@/components/products/Benefits";
import { products } from "@/lib/utils";

const Products = () => {
  return (
    <div className="pt-16" id="products">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">Our Products</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto">
              Specially formulated feed solutions for all your livestock needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                tags={product.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Benefits />
    </div>
  );
};

export default Products;
