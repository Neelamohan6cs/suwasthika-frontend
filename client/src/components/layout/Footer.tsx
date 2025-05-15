import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-heading font-bold text-xl mb-4">
              <span className="text-accent">Suwa</span>sthika
            </div>
            <p className="opacity-80 mb-4">
              Premium animal feed products for healthier livestock and better productivity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white opacity-80 hover:opacity-100 transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="opacity-80 hover:opacity-100 transition">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="opacity-80 hover:opacity-100 transition">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="opacity-80 hover:opacity-100 transition">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="opacity-80 hover:opacity-100 transition">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products">
                  <a className="opacity-80 hover:opacity-100 transition">Feed Pellets</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="opacity-80 hover:opacity-100 transition">Feed Mash</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="opacity-80 hover:opacity-100 transition">Mineral Mix</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="opacity-80 hover:opacity-100 transition">Custom Formulations</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 opacity-80 flex-shrink-0" size={18} />
                <span className="opacity-80">123 Agri Business Park, Bangalore, Karnataka 560058</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 opacity-80 flex-shrink-0" size={18} />
                <span className="opacity-80">+91 80 2345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 opacity-80 flex-shrink-0" size={18} />
                <span className="opacity-80">info@suwasthika.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-6 text-center opacity-70">
          <p>&copy; {new Date().getFullYear()} Suwasthika Animal Nutrition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
