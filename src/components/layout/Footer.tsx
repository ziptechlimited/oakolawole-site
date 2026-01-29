import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { logo } from "@/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice" },
    { name: "Our Team", path: "/team" },
    { name: "Articles", path: "/blog" },
    { name: "CSR", path: "/csr" },
    { name: "Contact", path: "/contact" },
  ];

  const practiceAreas = [
    { name: "Litigation & Arbitration", path: "/practice#litigation" },
    { name: "Corporate & Commercial", path: "/practice#corporate" },
    { name: "Energy Law", path: "/practice#energy" },
    { name: "Immigration", path: "/practice#immigration" },
    { name: "Labour & Employment", path: "/practice#labour" },
    { name: "Property Law", path: "/practice#property" },
  ];

  return (
    <footer className="bg-navy-gradient text-white/90">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Let's Discuss Your{" "}
              <span className="text-accent">Legal Needs</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We would be honored to represent you and your legal interests.
              Schedule a consultation with our experienced team today.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded-md transition-all"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                className="w-48 h-auto"
                alt="O.A. Kolawole & Co."
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A full-service Nigerian law firm providing trusted legal counsel
              with offices in Abuja, Lagos, and Jos.
            </p>
            <div className="space-y-3">
              <a
                href="tel:09022043227"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">090 2204 3227</span>
              </a>
              <a
                href="mailto:info@oakolawoleandco.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">info@oakolawoleandco.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-white">
              Our Offices
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">
                    Abuja (Head Office)
                  </p>
                  <p className="text-white/50 text-sm">
                    Suite 19, Jinifa Plaza, CBD
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Lagos</p>
                  <p className="text-white/50 text-sm">
                    Block 113, Lekki-Epe Expressway
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">Jos</p>
                  <p className="text-white/50 text-sm">
                    No. 3, Constitutional Hill Road
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} O.A. Kolawole & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-white/50 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/50 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
