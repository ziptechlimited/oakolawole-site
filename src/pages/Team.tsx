import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Oluwole Kolawole, Esq.',
    role: 'Principal Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Leading the firm with decades of experience in corporate and litigation practice, Oluwole brings unmatched expertise and leadership to every case.',
  },
  {
    name: 'Gbenga Lamina, Esq.',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'A seasoned litigator with extensive experience in banking and financial services law, providing strategic counsel to institutional clients.',
  },
  {
    name: 'Evelyn M. Kolawole, Esq.',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Specializing in corporate and commercial law, Evelyn provides comprehensive legal support for business transactions and corporate governance.',
  },
  {
    name: 'Funmi Joseph',
    role: 'Partner in Charge, Lagos Office',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Leading our Lagos operations with expertise in energy law and commercial litigation, Funmi ensures our Lagos clients receive exceptional service.',
  },
  {
    name: 'Aniefiok Ekanem, Esq.',
    role: 'Senior Associate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'A dedicated legal professional with strong expertise in immigration and labour law, providing practical solutions for complex legal challenges.',
  },
  {
    name: 'Jennifer Otanwa',
    role: 'Human Resources',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    bio: 'Ensuring our team operates at peak performance, Jennifer manages our human resources and administrative functions with dedication.',
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA44A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Partners & Associates
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Meet the experienced legal professionals dedicated to delivering excellence 
              and achieving the best outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elegant">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} className="text-navy" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                        aria-label={`LinkedIn profile of ${member.name}`}
                      >
                        <Linkedin size={18} className="text-navy" />
                      </a>
                    </div>
                    
                    {/* Gold accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We are always looking for talented legal professionals who share our commitment 
              to excellence and client service. Explore opportunities to grow with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-md transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
