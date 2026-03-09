import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { logo } from "@/assets";
import { getArticles } from "@/lib/articles";
import { getInstagramPosts } from "@/lib/instagram";
import type { BlogPost } from "@/data/articles";
import type { InstagramPost } from "@/types/instagram";
import ArticleCard from "@/components/articles/ArticleCard";
import PostCard from "@/components/instagram/PostCard";

const PAGE_SIZE = 6;

const Blog = () => {
  const [active, setActive] = useState<"articles" | "instagram">("articles");

  // Articles state
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [aPage, setAPage] = useState(1);
  const [aTotal, setATotal] = useState(0);
  const [aLoading, setALoading] = useState(true);
  const [aFetchingMore, setAFetchingMore] = useState(false);
  const [aError, setAError] = useState<string | null>(null);
  const [aHasMore, setAHasMore] = useState(true);
  const aSentinelRef = useRef<HTMLDivElement | null>(null);

  // Instagram state
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [iPage, setIPage] = useState(1);
  const [iTotal, setITotal] = useState(0);
  const [iLoading, setILoading] = useState(true);
  const [iFetchingMore, setIFetchingMore] = useState(false);
  const [iError, setIError] = useState<string | null>(null);
  const [iHasMore, setIHasMore] = useState(true);
  const iSentinelRef = useRef<HTMLDivElement | null>(null);

  // Live region
  const liveRef = useRef<HTMLDivElement | null>(null);

  const announce = (msg: string) => {
    if (liveRef.current) liveRef.current.textContent = msg;
  };

  const loadArticles = async (page: number, initial = false) => {
    if (initial) setALoading(true);
    else setAFetchingMore(true);
    setAError(null);
    try {
      const res = await getArticles({ page, pageSize: PAGE_SIZE });
      setATotal(res.total);
      setArticles((prev) => (page === 1 ? res.items : [...prev, ...res.items]));
      setAHasMore(page * PAGE_SIZE < res.total);
      announce(`Loaded ${res.items.length} articles`);
    } catch {
      setAError("Failed to load articles. Please try again.");
    } finally {
      setALoading(false);
      setAFetchingMore(false);
    }
  };

  const loadInstagram = async (page: number, initial = false) => {
    if (initial) setILoading(true);
    else setIFetchingMore(true);
    setIError(null);
    try {
      const res = await getInstagramPosts({ page, pageSize: PAGE_SIZE });
      setITotal(res.total);
      setPosts((prev) => (page === 1 ? res.items : [...prev, ...res.items]));
      setIHasMore(page * PAGE_SIZE < res.total);
      announce(`Loaded ${res.items.length} posts`);
    } catch {
      setIError("Failed to load Instagram posts. Please try again.");
    } finally {
      setILoading(false);
      setIFetchingMore(false);
    }
  };

  useEffect(() => {
    loadArticles(1, true);
    loadInstagram(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Observe sentinel for active tab only
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const el =
      active === "articles" ? aSentinelRef.current : iSentinelRef.current;
    if (!el) return;
    const cb: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) return;
      if (active === "articles" && aHasMore && !aFetchingMore) {
        const next = aPage + 1;
        setAPage(next);
        loadArticles(next);
      } else if (active === "instagram" && iHasMore && !iFetchingMore) {
        const next = iPage + 1;
        setIPage(next);
        loadInstagram(next);
      }
    };
    observer = new IntersectionObserver(cb, { rootMargin: "200px" });
    observer.observe(el);
    return () => observer?.disconnect();
  }, [active, aPage, iPage, aHasMore, iHasMore, aFetchingMore, iFetchingMore]);

  const aCount = useMemo(
    () => `${articles.length}${aTotal ? ` of ${aTotal}` : ""}`,
    [articles.length, aTotal],
  );
  const iCount = useMemo(
    () => `${posts.length}${iTotal ? ` of ${iTotal}` : ""}`,
    [posts.length, iTotal],
  );
  return (
    <Layout>
      <SEO
        title="Legal Insights & Articles"
        description="Stay informed with the latest legal insights, industry updates, and expert commentary from O.A. Kolawole & Co. on Nigerian law and business."
        canonicalUrl="/blog"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA44A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
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
              Blog
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay informed with our latest legal insights, industry updates,
              and expert commentary on matters that affect you and your
              business.
            </p>
          </motion.div>
        </div>
      </section>
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="container-custom flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-auto" />
            <h1 className="text-lg font-semibold">Explore</h1>
          </div>
          <Tabs
            value={active}
            onValueChange={(v) => setActive(v as "articles" | "instagram")}
          >
            <TabsList className="bg-secondary">
              <TabsTrigger
                value="articles"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300 ease-in-out"
              >
                Articles
              </TabsTrigger>
              <TabsTrigger
                value="instagram"
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all duration-300 ease-in-out"
              >
                Instagram
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>
      <section className="container-custom py-6">
        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as "articles" | "instagram")}
        >
          <TabsContent value="articles" className="focus:outline-none">
            {aLoading ? (
              <div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                role="status"
                aria-label="Loading articles"
              >
                {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <div key={i} className="rounded-2xl border p-4">
                    <Skeleton className="aspect-[16/10] w-full rounded-lg" />
                    <div className="mt-4 space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : aError ? (
              <div className="mx-auto max-w-md rounded-xl border p-6 text-center">
                <p className="mb-4 text-muted-foreground">{aError}</p>
                <Button
                  onClick={() => {
                    setAPage(1);
                    loadArticles(1, true);
                  }}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <>
                <div
                  className="mb-4 text-sm text-muted-foreground"
                  aria-live="polite"
                >
                  {aCount} articles
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {articles.map((a, i) => (
                    <ArticleCard key={a.id} article={a} index={i} />
                  ))}
                </div>
                <div ref={aSentinelRef} className="h-px w-full" />
                {aHasMore && (
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const next = aPage + 1;
                        setAPage(next);
                        loadArticles(next);
                      }}
                      disabled={aFetchingMore}
                    >
                      {aFetchingMore ? "Loading…" : "Load more"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
          <TabsContent value="instagram" className="focus:outline-none">
            {iLoading ? (
              <div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                role="status"
                aria-label="Loading Instagram posts"
              >
                {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <div key={i} className="rounded-2xl border p-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="mb-2 h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Skeleton className="aspect-square w-full rounded-lg" />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-10" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-10" />
                    </div>
                    <Skeleton className="mt-3 h-4 w-3/4" />
                    <Skeleton className="mt-2 h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : iError ? (
              <div className="mx-auto max-w-md rounded-xl border p-6 text-center">
                <p className="mb-4 text-muted-foreground">{iError}</p>
                <Button
                  onClick={() => {
                    setIPage(1);
                    loadInstagram(1, true);
                  }}
                >
                  Retry
                </Button>
              </div>
            ) : (
              <>
                <div
                  className="mb-4 text-sm text-muted-foreground"
                  aria-live="polite"
                >
                  {iCount} posts
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {posts.map((p) => (
                    <PostCard key={p.id} post={p} />
                  ))}
                </div>
                <div ref={iSentinelRef} className="h-px w-full" />
                {iHasMore && (
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const next = iPage + 1;
                        setIPage(next);
                        loadInstagram(next);
                      }}
                      disabled={iFetchingMore}
                    >
                      {iFetchingMore ? "Loading…" : "Load more"}
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
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
