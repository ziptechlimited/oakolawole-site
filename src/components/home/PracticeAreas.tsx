import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Briefcase, Zap, Globe, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const practices = [
  {
    icon: Scale,
    title: 'Litigation & Arbitration',
    description: 'Decades of combined courtroom experience in Land, Contract, Banking, Human Rights, and Constitutional Law.',
    link: '/practice#litigation',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Commercial',
    description: 'Comprehensive support for foreign and local clients across corporate and financial transactions.',
    link: '/practice#corporate',
  },
  {
    icon: Zap,
    title: 'Energy Law',
    description: 'Deep industry knowledge serving governments, regulators, project developers, and financial institutions.',
    link: '/practice#energy',
  },
  {
    icon: Globe,
    title: 'Immigration',
    description: 'Expert assistance with CERPAC applications, work permits, and business permits for foreign investors.',
    link: '/practice#immigration',
  },
];

const PracticeAreas = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="What We Do"
          title="Our Core Practice Areas"
          description="We provide comprehensive legal services tailored to meet the unique needs of each client, combining expertise with innovative strategies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={practice.link} className="block group h-full">
                <div className="relative h-full p-8 bg-card rounded-xl border border-border shadow-soft transition-all duration-300 hover:shadow-elegant hover:border-accent/30 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <practice.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {practice.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/practice"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            View All Practice Areas
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
