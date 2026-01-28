import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA44A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-navy-gradient" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Scale size={16} className="text-accent" />
              <span className="text-white/80 text-sm font-medium">
                Trusted Legal Excellence Since Founding
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6"
            >
              Trusted Legal Counsel for a{" "}
              <span className="text-accent">Changing World</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We would be honored to represent you and your legal interests. Our
              experienced team provides tailored legal solutions across
              Litigation, Corporate Law, Energy, and Immigration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 h-14 text-base"
              >
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-accent-foreground hover:bg-white/10 hover:text-white h-14 text-base"
              >
                <Link to="/practice">Our Practice Areas</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              <div>
                <p className="font-playfair text-3xl md:text-4xl font-semibold text-accent">
                  20+
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Years Combined Experience
                </p>
              </div>
              <div>
                <p className="font-playfair text-3xl md:text-4xl font-semibold text-accent">
                  3
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Strategic Locations
                </p>
              </div>
              <div>
                <p className="font-playfair text-3xl md:text-4xl font-semibold text-accent">
                  9+
                </p>
                <p className="text-white/60 text-sm mt-1">Practice Areas</p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional law office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
