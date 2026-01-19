import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Understanding Nigerian Business Law: A Guide for Foreign Investors',
    excerpt: 'A comprehensive overview of the legal framework governing foreign investment in Nigeria, including company registration, tax obligations, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Oluwole Kolawole',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Corporate Law',
  },
  {
    id: 2,
    title: 'Immigration Updates: New CERPAC Requirements for 2025',
    excerpt: 'Important changes to the Combined Expatriate Residence Permit and Aliens Card (CERPAC) process and what foreign nationals need to know.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Aniefiok Ekanem',
    date: 'December 10, 2024',
    readTime: '5 min read',
    category: 'Immigration',
  },
  {
    id: 3,
    title: 'Energy Sector Reforms: Implications for Investors',
    excerpt: 'An analysis of recent reforms in Nigeria\'s energy sector and their impact on current and prospective investors in oil, gas, and renewable energy.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Funmi Joseph',
    date: 'November 28, 2024',
    readTime: '10 min read',
    category: 'Energy Law',
  },
  {
    id: 4,
    title: 'Property Title Perfection in FCT and Lagos: A Comparative Analysis',
    excerpt: 'Understanding the differences in property title registration between the Federal Capital Territory and Lagos State, and best practices for perfection.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Gbenga Lamina',
    date: 'November 15, 2024',
    readTime: '7 min read',
    category: 'Property Law',
  },
  {
    id: 5,
    title: 'Labour Law Compliance: Essential Guide for Employers',
    excerpt: 'Key considerations for employers under the Nigerian Labour Act, including employee rights, termination procedures, and dispute resolution.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Evelyn M. Kolawole',
    date: 'November 5, 2024',
    readTime: '6 min read',
    category: 'Labour Law',
  },
  {
    id: 6,
    title: 'Consumer Protection: Your Rights Under Nigerian Law',
    excerpt: 'An overview of consumer rights and protections available under Nigerian law, and how to seek redress for violations.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Oluwole Kolawole',
    date: 'October 20, 2024',
    readTime: '5 min read',
    category: 'Consumer Protection',
  },
];

const Blog = () => {
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
              Insights & Updates
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Articles
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay informed with our latest legal insights, industry updates, 
              and expert commentary on matters that affect you and your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-elegant">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-playfair text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User size={14} />
                        {article.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Informed
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter for the latest legal insights, 
              industry updates, and firm news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6 py-3 rounded-md transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
