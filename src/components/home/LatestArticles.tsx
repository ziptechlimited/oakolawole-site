import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";

const LatestArticles = () => {
  const latestArticles = articles.slice(0, 3);

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
                  <Link to={`/blog/${article.slug}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
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
