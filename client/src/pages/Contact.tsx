import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/contact/Faq";

const Contact = () => {
  return (
    <div className="pt-16" id="contact">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-2">Contact Us</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto">
              Have questions or need assistance? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="bg-neutral-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-heading font-semibold mb-4">Office Location</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" />
                  <p className="text-neutral-700">
                    123 Agri Business Park,<br />
                    Industrial Area Phase II,<br />
                    Bangalore, Karnataka 560058
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="text-primary mr-4 flex-shrink-0" />
                  <p className="text-neutral-700">+91 80 2345 6789</p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="text-primary mr-4 flex-shrink-0" />
                  <p className="text-neutral-700">info@suwasthika.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="text-primary mr-4 flex-shrink-0" />
                  <p className="text-neutral-700">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-100 p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-opacity-90 transition"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Faq />
    </div>
  );
};

export default Contact;
