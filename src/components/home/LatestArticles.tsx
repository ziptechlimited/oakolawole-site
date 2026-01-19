import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

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
];

const LatestArticles = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          label="Insights & Updates"
          title="Latest from Our Blog"
          description="Stay informed with our latest legal insights, industry updates, and expert commentary on matters that affect you and your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestArticles;
