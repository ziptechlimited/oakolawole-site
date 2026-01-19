import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { 
  Scale, Briefcase, Zap, Globe, Shield, Users, 
  Building2, FileText, Gavel, Home, Wifi, HeartHandshake 
} from 'lucide-react';

const practiceAreas = [
  {
    id: 'litigation',
    icon: Gavel,
    title: 'Litigation & Arbitration',
    description: 'Our litigation team has decades of combined courtroom experience across diverse areas including:',
    details: [
      'Land and Property Disputes',
      'Contract and Commercial Litigation',
      'Banking & Financial Services',
      'Human Rights Matters',
      'Constitutional & Electoral Law',
      'Chieftaincy Matters',
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate & Commercial',
    description: 'We provide comprehensive legal support for businesses:',
    details: [
      'Company Formation & Structuring',
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Commercial Contracts',
      'Regulatory Compliance',
      'Foreign Investment Advisory',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'energy',
    icon: Zap,
    title: 'Energy Law',
    description: 'Deep industry knowledge serving the energy sector:',
    details: [
      'Oil & Gas Transactions',
      'Power Sector Regulations',
      'Renewable Energy Projects',
      'Regulatory Compliance',
      'Project Finance',
      'Environmental Law',
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'immigration',
    icon: Globe,
    title: 'Immigration',
    description: 'Expert assistance for individuals and businesses:',
    details: [
      'CERPAC Applications',
      'Work Permits',
      'Business Permits',
      'Residence Permits',
      'Visa Applications',
      'Immigration Compliance',
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'consumer',
    icon: Shield,
    title: 'Consumer Protection',
    description: 'Protecting consumer rights and interests:',
    details: [
      'Consumer Rights Advocacy',
      'FCCPC Engagement',
      'Product Liability',
      'Alternative Dispute Resolution',
      'Class Actions',
      'Regulatory Matters',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'labour',
    icon: Users,
    title: 'Labour & Employment',
    description: 'Comprehensive employment law services:',
    details: [
      'Employment Contracts',
      'Workplace Policies',
      'Industrial Disputes',
      'Redundancy & Termination',
      'Pension Reform Compliance',
      'Labour Act Matters',
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'insolvency',
    icon: Building2,
    title: 'Insolvency Law',
    description: 'Guidance through complex insolvency matters:',
    details: [
      'Corporate Restructuring',
      'Bankruptcy Proceedings',
      'Creditor Rights',
      'Debt Recovery',
      'Receivership',
      'Liquidation',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'property',
    icon: Home,
    title: 'Conveyance & Property',
    description: 'Expert property and real estate services:',
    details: [
      'Property Sales & Purchases',
      'Lease Agreements',
      'Title Perfection (FCT & Lagos)',
      'Land Acquisition',
      'Development Agreements',
      'Property Due Diligence',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'other',
    icon: FileText,
    title: 'Other Practice Areas',
    description: 'Additional areas of expertise:',
    details: [
      'Internet & Social Media Law',
      'Human Rights & Family Law',
      'Corporate Governance',
      'Company Secretarial Services',
      'Media, Sports & Entertainment',
      'Intellectual Property',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const Practice = () => {
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
              Our Expertise
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Comprehensive legal services across a wide range of practice areas, 
              delivered with expertise and dedication to achieving the best outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas List */}
      <div className="bg-background">
        {practiceAreas.map((area, index) => (
          <section
            key={area.id}
            id={area.id}
            className={`section-padding ${index % 2 === 1 ? 'bg-secondary' : 'bg-background'}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3">
                      <area.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary">
                      {area.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {area.details.map((detail, i) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground text-sm">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-accent/20 rounded-2xl -z-10`} />
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Practice;
