import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const ProductCard = ({ name, description, image, tags }: ProductCardProps) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <img 
        src={image} 
        alt={`Suwasthika ${name}`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2">{name}</h3>
        <p className="text-neutral-700 mb-4">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-secondary bg-opacity-20 text-primary hover:bg-secondary hover:bg-opacity-30"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
