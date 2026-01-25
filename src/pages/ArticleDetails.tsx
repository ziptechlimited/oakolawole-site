import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { articles, BlogPost } from "@/data/articles";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const ArticleDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogPost | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      const foundArticle = articles.find((a) => a.slug === slug);

      if (foundArticle) {
        setArticle(foundArticle);

        // Find related articles (same category, excluding current)
        const related = articles
          .filter(
            (a) =>
              a.category === foundArticle.category && a.id !== foundArticle.id,
          )
          .slice(0, 2);

        // If not enough related by category, just take recent ones
        if (related.length < 2) {
          const others = articles
            .filter((a) => a.id !== foundArticle.id && !related.includes(a))
            .slice(0, 2 - related.length);
          related.push(...others);
        }

        setRelatedArticles(related);
      }
      setIsLoading(false);
    }, 500);
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background px-4 text-center">
          <h2 className="font-playfair text-3xl font-semibold text-primary mb-4">
            Article Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/blog">Back to Articles</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {article && (
        <SEO
          title={article.title}
          description={article.excerpt}
          canonicalUrl={`/blog/${article.slug}`}
          ogType="article"
          ogImage={article.image}
          keywords={article.tags}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            image: article.image,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "O.A. Kolawole & Co.",
              logo: {
                "@type": "ImageObject",
                url: "https://oakolawoleandco.com/logo.png",
              },
            },
            datePublished: article.date,
            description: article.excerpt,
          }}
        />
      )}
      {/* Article Header */}
      <section className="relative pt-32 pb-12 bg-navy">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA44A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Articles
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-accent/20 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                  {article.category}
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-accent" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  {article.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 rounded-2xl overflow-hidden shadow-elegant"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <motion.article
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-accent prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Social Share */}
                <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                  <span className="text-primary font-medium font-playfair">
                    Share this article:
                  </span>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-full bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors">
                      <Share2 size={18} />
                    </button>
                    {/* Add more social icons as needed */}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                {/* Related Articles */}
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                          />
                          <div>
                            <span className="text-xs text-accent font-medium mb-1 block">
                              {related.category}
                            </span>
                            <h4 className="font-medium text-primary leading-snug group-hover:text-accent transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-navy p-6 rounded-xl text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    Subscribe
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Get the latest legal insights delivered directly to your
                    inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent mb-3 text-sm"
                  />
                  <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-2 rounded-md text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetails;
