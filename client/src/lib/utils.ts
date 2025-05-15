import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Product data for the website
export const products = [
  {
    id: 1,
    name: "Feed Pellets",
    description: "Nutrient-dense pellets designed for optimal digestion and maximum nutritional value. Available for various livestock categories.",
    image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    tags: ["High Protein", "Easy Digestion"]
  },
  {
    id: 2,
    name: "Feed Mash",
    description: "Finely ground feed mixture with balanced nutrients, perfect for poultry and young animals with developing digestive systems.",
    image: "https://pixabay.com/get/g296c97d38875c88e3c26ccf5eba15e6712d72880c9871fb56bd6f8e38b7320473cb4fb707d327e2c987bc669ecd9c1cb9a60d2a0891252de7f3d916e42e3eb97_1280.jpg",
    tags: ["Balanced Formula", "Growth Support"]
  },
  {
    id: 3,
    name: "Mineral Mix",
    description: "Essential micro and macro minerals formulated to prevent deficiencies and boost immune systems in all livestock.",
    image: "https://pixabay.com/get/gea042695a3cfabdd1d6d2c660ecf0e662beb693e7e4828fbdd5adbf16701930d2e5897e3c23c262bd593db697ed79473843f36e996d7ef85f39c9fcc0885b87f_1280.jpg",
    tags: ["Immune Support", "Enhanced Health"]
  }
];

// FAQs data
export const faqs = [
  {
    id: 1,
    question: "How do I determine the right feed for my livestock?",
    answer: "The right feed depends on the type of livestock, age, purpose (milk, meat, breeding), and local environmental conditions. Our technical team can provide personalized recommendations based on your specific needs. Contact us for a consultation."
  },
  {
    id: 2,
    question: "Do you offer bulk ordering and delivery?",
    answer: "Yes, we offer bulk ordering with competitive pricing for commercial farms. Our delivery service is available across most regions, with special scheduling for larger orders. Contact our sales team to discuss your volume requirements and delivery options."
  },
  {
    id: 3,
    question: "How should I store Suwasthika feed products?",
    answer: "Our feed products should be stored in a cool, dry place away from direct sunlight. Keep bags sealed when not in use to maintain freshness and prevent moisture contamination. For optimal quality, use within 3 months of purchase date printed on the packaging."
  },
  {
    id: 4,
    question: "Can I get custom feed formulations for my specific needs?",
    answer: "Yes, we offer custom feed formulation services for commercial farms with specific nutritional requirements. Our nutritionists will work with you to develop a specialized formula based on your livestock needs, local conditions, and production goals."
  }
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    content: "Since switching to Suwasthika feeds, my cattle have shown significant improvement in health and milk production. The quality is consistently excellent.",
    author: "Rajesh Kumar, Dairy Farmer",
    rating: 5
  },
  {
    id: 2,
    content: "The mineral mix has made a remarkable difference in my poultry farm. Birds are healthier and their growth rate has improved substantially.",
    author: "Priya Sharma, Poultry Farm Owner",
    rating: 5
  }
];
