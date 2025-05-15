import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set page title
document.title = "Suwasthika - Premium Animal Feed Products";

// Add meta description for SEO
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content = "Suwasthika provides scientifically formulated feed solutions that promote animal health and maximize livestock productivity.";
document.head.appendChild(metaDescription);

// Add Open Graph tags for better social media sharing
const ogTitle = document.createElement("meta");
ogTitle.property = "og:title";
ogTitle.content = "Suwasthika - Premium Animal Feed Products";
document.head.appendChild(ogTitle);

const ogDescription = document.createElement("meta");
ogDescription.property = "og:description";
ogDescription.content = "Scientifically formulated animal feed solutions for healthier livestock and maximum productivity.";
document.head.appendChild(ogDescription);

const ogType = document.createElement("meta");
ogType.property = "og:type";
ogType.content = "website";
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
