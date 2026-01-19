import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  'High-quality legal services tailored to unique needs',
  'Building relationships based on trust and mutual respect',
  'Innovative strategies for immediate and long-term goals',
  'Strategic locations: Abuja, Lagos, and Jos',
];

const AboutPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern office meeting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-navy text-white p-6 rounded-xl shadow-elegant hidden md:block"
            >
              <p className="font-playfair text-4xl font-semibold text-accent mb-1">100%</p>
              <p className="text-white/70 text-sm">Client Commitment</p>
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
              A Full-Service Nigerian Law Firm
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O.A. Kolawole & Co. is a full-service law firm positioned to render high quality 
              legal services tailored to meet the unique needs of each client. With a commitment 
              to excellence, ethics, and professionalism, we strive to be the trusted legal 
              partner our clients deserve.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are dedicated to building relationships based on trust and mutual respect, 
              providing sound advice, effective advocacy, and exceptional representation.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/about">
                Learn More About Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
